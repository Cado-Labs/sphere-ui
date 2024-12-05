import React from "react"

import { StoryPage } from "@components"

import { emojipicker } from "./emojipicker"

export default {
  title: "Components / Display",
}

export const EmojiPicker = context => <StoryPage {...emojipicker} {...context} />

EmojiPicker.storyName = "EmojiPicker"
