import { useEffect, useRef } from "react"
import Prism from "prismjs"

export function Highlighter ({ code, plugins = [], language }) {
  const ref = useRef(null)

  useEffect(() => {
    Prism.highlightElement(ref.current)
  }, [ref.current])

  return (
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  )
}
