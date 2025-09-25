// Footer.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
import style from "./styles/footer.scss";

export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear();

    return (
      <footer class={`${displayClass ?? ""} quartz-footer`}>
        <p>
          Created with <span style={{ color: "red" }}>❤️</span> by Miftah &copy; {year}
        </p>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
