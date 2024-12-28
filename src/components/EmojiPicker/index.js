import React from "react"
import { Picker } from "emoji-mart"
import data from "@emoji-mart/data"

import translations from "./translations"

// because it has broken and unnecessary
const EXCLUDED_EMOJIS = ["relaxed"]

// @emoji-mart/react has a bug described in https://github.com/missive/emoji-mart/issues/812
// it`s a custom react-wrapper with fix from https://github.com/missive/emoji-mart/pull/958
export const EmojiPicker = props => {
  const language = props?.language || "en"
  const propsWithExtras = {
    data,
    i18n: translations[language],
    exceptEmojis: EXCLUDED_EMOJIS,
    ...props,
  }

  const ref = React.useRef(null)
  const instance = React.useRef(null)
  if (instance.current) {
    instance.current.update(propsWithExtras)
  }

  React.useEffect(() => {
    const PickerElement = window?.customElements.get("em-emoji-picker")
    if (PickerElement) {
      instance.current = new PickerElement({ ...propsWithExtras, ref })
      return
    }
    instance.current = new Picker({ ...propsWithExtras, ref })

    return () => {
      instance.current = null
    }
  }, [])
  return React.createElement("div", { ref })
}

export default EmojiPicker
