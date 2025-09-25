import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "../styles/mediumArticle.scss"

interface Options {
  url?: string
  height?: string
}

const MediumArticle: QuartzComponentConstructor = (opts?: Options) => {
  const Component: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    if (!opts?.url) return <p>No Medium article URL provided.</p>

    return (
      <div class={`${displayClass ?? ""} medium-article-container`}>
        <iframe
          src={opts.url}
          width="100%"
          height={opts.height ?? "600px"}
          frameBorder="0"
          scrolling="yes"
          style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
      </div>
    )
  }

  Component.css = style
  return Component
}

export default MediumArticle
