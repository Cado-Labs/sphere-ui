import React from "react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"

import translations from "./translations"

// because it has broken and unnecessary
const EXCLUDED_EMOJIS = ["relaxed"]

export const EmojiPicker = ({
  language = translations.en,
  ...props
}) => (
  <Picker
    data={data}
    i18n={translations[language]}
    searchPosition="none"
    exceptEmojis={EXCLUDED_EMOJIS}
    {...props}
  />
)
