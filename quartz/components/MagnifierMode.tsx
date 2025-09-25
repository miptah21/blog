// quartz/components/MagnifierMode.tsx
import { h } from "preact";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
// @ts-ignore
import script from "./scripts/magnifier.inline";
import style from "./styles/magnifier.scss";

const MagnifierMode: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={`${displayClass ?? ""} magnifier-button`} aria-label="Toggle magnifier (Ctrl+Q)" title="Toggle magnifier (Ctrl+Q)">
      🔍
    </button>
  );
};

MagnifierMode.beforeDOMLoaded = script;
MagnifierMode.css = style;

export default (() => MagnifierMode) satisfies QuartzComponentConstructor;
