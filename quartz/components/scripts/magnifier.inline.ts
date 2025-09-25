// quartz/components/scripts/magnifier.inline.ts
(() => {
  // konfigurasi
  const TOGGLE_KEY = "q"; // Ctrl/Cmd + q untuk toggle
  const SCALE = 1.9; // besar perbesaran
  const DIAMETER = 180; // diameter lingkaran magnifier (px)
  const MIN_WINDOW_WIDTH = 480; // nonaktifkan di layar kecil (opsional)

  let active = false;
  let lastMouse = { x: 0, y: 0 };
  let rafId: number | null = null;
  let currentTarget: HTMLElement | null = null;
  const originalStyle = new WeakMap<HTMLElement, Record<string, string>>();

  // overlay lingkaran
  const overlay = document.createElement("div");
  overlay.className = "quartz-magnifier-overlay";
  overlay.style.display = "none";
  document.body.appendChild(overlay);

  function isEditable(el: Element | null) {
    if (!el) return false;
    const tag = (el as HTMLElement).tagName?.toLowerCase();
    if (!tag) return false;
    if (["input", "textarea", "select", "button"].includes(tag)) return true;
    if ((el as HTMLElement).isContentEditable) return true;
    return false;
  }

  function saveOriginalStyles(el: HTMLElement) {
    if (originalStyle.has(el)) return;
    originalStyle.set(el, {
      transform: el.style.transform || "",
      transformOrigin: el.style.transformOrigin || "",
      zIndex: el.style.zIndex || "",
      position: el.style.position || "",
      transition: el.style.transition || "",
      willChange: el.style.willChange || "",
    });
  }

  function restoreOriginalStyles(el: HTMLElement) {
    const s = originalStyle.get(el);
    if (!s) return;
    el.style.transform = s.transform;
    el.style.transformOrigin = s.transformOrigin;
    el.style.zIndex = s.zIndex;
    el.style.position = s.position;
    el.style.transition = s.transition;
    el.style.willChange = s.willChange;
    originalStyle.delete(el);
  }

  function findMagnifiableElementFromPoint(x: number, y: number): HTMLElement | null {
    let el = document.elementFromPoint(x, y) as Element | null;
    if (!el) return null;
    // if text node, get parent
    if (el.nodeType === Node.TEXT_NODE) el = (el as any).parentElement;
    let node: Element | null = el;
    while (node && node !== document.body) {
      const name = (node as HTMLElement).tagName?.toLowerCase();
      // allowed tags to magnify; includes block text and inline text containers and iframe/img
      const good = [
        "p",
        "li",
        "span",
        "td",
        "th",
        "pre",
        "code",
        "blockquote",
        "h1",
        "h2",
        "h3",
        "h4",
        "article",
        "section",
        "div",
        "a",
        "img",
        "figure",
        "iframe",
      ];
      if (name && (good.includes(name) || node.classList.contains("center") || node.closest(".center"))) {
        return node as HTMLElement;
      }
      node = node.parentElement;
    }
    // fallback: return element if it's an HTMLElement
    return el instanceof HTMLElement ? el : null;
  }

  function updateOverlayPosition(x: number, y: number) {
    const half = DIAMETER / 2;
    overlay.style.left = x - half + "px";
    overlay.style.top = y - half + "px";
    overlay.style.width = DIAMETER + "px";
    overlay.style.height = DIAMETER + "px";
  }

  function applyMagnifyTo(el: HTMLElement, clientX: number, clientY: number) {
    if (!el) return;
    if (isEditable(el)) return;

    if (currentTarget && currentTarget !== el) {
      // restore previous
      restoreOriginalStyles(currentTarget);
      currentTarget = null;
    }

    if (!currentTarget) {
      currentTarget = el;
      saveOriginalStyles(el);
      // minimal safe styles
      el.style.transition = "transform 0.06s ease";
      el.style.willChange = "transform";
      // only set position:relative if computed style is static
      const cs = getComputedStyle(el);
      if (cs.position === "static") {
        el.style.position = "relative";
      }
      el.style.zIndex = "99999";
    }

    // compute offset inside element
    const rect = currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    currentTarget.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    currentTarget.style.transform = `scale(${SCALE})`;
  }

  function clearMagnify() {
    if (currentTarget) {
      restoreOriginalStyles(currentTarget);
      currentTarget = null;
    }
    overlay.style.display = "none";
  }

  function updateFrame() {
    rafId = null;
    if (!active) return;
    // Ignore on very small screens
    if (window.innerWidth < MIN_WINDOW_WIDTH) {
      clearMagnify();
      return;
    }
    overlay.style.display = "block";
    updateOverlayPosition(lastMouse.x, lastMouse.y);
    const el = findMagnifiableElementFromPoint(lastMouse.x, lastMouse.y);
    if (el) {
      applyMagnifyTo(el, lastMouse.x, lastMouse.y);
    } else {
      // nothing to magnify
      if (currentTarget) {
        restoreOriginalStyles(currentTarget);
        currentTarget = null;
      }
    }
  }

  function onMouseMove(e: MouseEvent) {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    if (!active) return;
    if (rafId == null) rafId = requestAnimationFrame(updateFrame);
  }

  function toggleMagnifier() {
    active = !active;
    if (!active) {
      clearMagnify();
      document.body.classList.remove("magnifier-active");
    } else {
      document.body.classList.add("magnifier-active");
      overlay.style.display = "block";
      // immediate frame update
      if (rafId == null) rafId = requestAnimationFrame(updateFrame);
    }
  }

  // Toggle by Ctrl/Cmd + Q
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    const mod = e.ctrlKey || e.metaKey;
    if (!mod) return;
    if (e.key.toLowerCase() === TOGGLE_KEY) {
      e.preventDefault();
      toggleMagnifier();
    }
    // Escape to exit
    if (e.key === "Escape" && active) {
      e.preventDefault();
      toggleMagnifier();
    }
  });

  document.addEventListener("mousemove", onMouseMove, { passive: true });

  // If user clicks outside center content, exit magnifier (optional)
  document.addEventListener("click", (e) => {
    // if click not inside .center and not on a UI control we keep it simple
    if (active && !(e.target as HTMLElement).closest(".center")) {
      toggleMagnifier();
    }
  });

  // On unload cleanup
  window.addEventListener("beforeunload", () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (currentTarget) restoreOriginalStyles(currentTarget);
  });

  // expose for debugging (optional)
  (window as any).__quartz_magnifier = {
    toggle: toggleMagnifier,
    isActive: () => active,
  };
})();
