/* eslint-disable max-len */
import i18n, {Trans} from "@i18n"
import {Button, EmojiPicker, InputTextarea} from "@cadolabs/sphere-ui"
import React from "react"

const I18N_PREFIX = "stories.emoji"

const code = `
function Example () {
  const inputRef = React.useRef()
  const [show, setShow] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  
  const handleEmojiPick = event => {
    const emojiSymbol = event.native
    
    if (inputRef.current) {
      const cursorPosition = inputRef.current.selectionStart || 0
      
      const newValue =
        inputValue.slice(0, cursorPosition) + emojiSymbol + inputValue.slice(cursorPosition)
      setInputValue(newValue)
      
      const newCursorPosition = cursorPosition + emojiSymbol.length
  
      // allow to add multiple emojis in the same position
      setTimeout(() => {
        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition)
      }, 50)
    }
  }
  
  return (
    <div className="p-card s-container mb-3 p-3">
      <div className="flex">
        <InputTextarea
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-30rem h-5rem"
        />
        <div className="inline-block relative">
          <Button
            type="button"
            icon="pi pi-face-smile"
            rounded
            text
            raised
            severity="secondary"
            aria-label="Emoji"
            onClick={() => setShow(!show)}
            className="ml-4"
          />
          {show && (
            <div className="absolute z-2 right-0">
              <EmojiPicker
                onEmojiSelect={handleEmojiPick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
`

const emojimartLink = (
  <a
    href="https://github.com/missive/emoji-mart"
    rel="noopener noreferrer"
    target="_blank"
  >
    emoji-mart
  </a>
)

const emojiPickerExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{
            code: <code className="inline-code"/>,
            a: emojimartLink,
          }}
        />
      </p>
    </div>
  </div>
)

export const emojipicker = {
  component: "EmojiPicker",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: emojiPickerExtra,
  },
  code,
  scope: { EmojiPicker, Button, InputTextarea },
  descriptionProps: [
    { name: "language", type: "string", default: "en", description: `${I18N_PREFIX}.props.language` },
  ],
}
