import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
import style from "./styles/footer.scss";

export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear();

    return (
      <footer class={`${displayClass ?? ""}`} style={{ textAlign: "center", padding: "1.2rem", fontSize: "0.95rem", background: "#fff8e1", color: "#3e2f15" }}>
        <p>
          Created with <span style={{ color: "red" }}>❤️</span> by Miftah &copy; {year}
        </p>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
