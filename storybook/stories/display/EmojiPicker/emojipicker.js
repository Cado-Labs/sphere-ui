/* eslint-disable max-len */
import i18n, { Trans } from "@i18n"
import { Button, EmojiPicker, InputTextarea } from "@cadolabs/sphere-ui"
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
            code: <code className="inline-code" />,
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
    { name: "categories", type: "array", default: "[ ]", description: `${I18N_PREFIX}.props.categories` },
    { name: "custom", type: "array", default: "[ ]", description: `${I18N_PREFIX}.props.custom` },
    { name: "autoFocus", type: "boolean", default: "false", description: `${I18N_PREFIX}.props.autoFocus` },
    { name: "categoryIcons", type: "object", default: "{ }", description: `${I18N_PREFIX}.props.categoryIcons` },
    { name: "dynamicWidth", type: "boolean", default: "false", description: `${I18N_PREFIX}.props.dynamicWidth` },
    { name: "emojiButtonColors", type: "array", default: "[ ]", description: `${I18N_PREFIX}.props.emojiButtonColors` },
    { name: "emojiButtonRadius", type: "string", default: "100%", description: `${I18N_PREFIX}.props.emojiButtonRadius` },
    { name: "emojiButtonSize", type: "number", default: 36, description: `${I18N_PREFIX}.props.emojiButtonSize` },
    { name: "emojiSize", type: "number", default: 24, description: `${I18N_PREFIX}.props.emojiSize` },
    { name: "exceptEmojis", type: "array", default: '["relaxed"]', description: `${I18N_PREFIX}.props.exceptEmojis` },
    { name: "icons", type: "string", default: "auto", description: `${I18N_PREFIX}.props.icons` },
    { name: "maxFrequentRows", type: "number", default: 4, description: `${I18N_PREFIX}.props.maxFrequentRows` },
    { name: "navPosition", type: "string", default: "top", description: `${I18N_PREFIX}.props.navPosition` },
    { name: "noCountryFlags", type: "boolean", default: "false", description: `${I18N_PREFIX}.props.noCountryFlags` },
    { name: "noResultsEmoji", type: "string", default: "cry", description: `${I18N_PREFIX}.props.noResultsEmoji` },
    { name: "perLine", type: "number", default: 9, description: `${I18N_PREFIX}.props.perLine` },
    { name: "previewEmoji", type: "number", default: "point_up", description: `${I18N_PREFIX}.props.previewEmoji` },
    { name: "previewPosition", type: "string", default: "bottom", description: `${I18N_PREFIX}.props.previewPosition` },
    { name: "searchPosition", type: "string", default: "sticky", description: `${I18N_PREFIX}.props.searchPosition` },
    { name: "set", type: "string", default: "native", description: `${I18N_PREFIX}.props.set` },
    { name: "skin", type: "number", default: 1, description: `${I18N_PREFIX}.props.skin` },
    { name: "skinTonePosition", type: "string", default: "preview", description: `${I18N_PREFIX}.props.skinTonePosition` },
    { name: "theme", type: "string", default: "auto", description: `${I18N_PREFIX}.props.theme` },
  ],
  eventDescriptionProps: [
    { name: "onEmojiSelect", params: [{ name: "event", description: "onEmojiSelect event" }], description: `${I18N_PREFIX}.props.onEmojiSelect` },
    { name: "onClickOutside", params: [{ name: "event", description: "onClickOutside event" }], description: `${I18N_PREFIX}.props.onClickOutside` },
    { name: "onAddCustomEmoji", params: [{ name: "event", description: "onAddCustomEmoji event" }], description: `${I18N_PREFIX}.props.onAddCustomEmoji` },
    { name: "getSpritesheetURL", description: `${I18N_PREFIX}.props.getSpritesheetURL` },
  ],
}
