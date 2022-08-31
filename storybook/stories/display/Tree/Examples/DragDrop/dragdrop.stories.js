import React from "react"

import { StoryPage } from "@components"

import { dragdrop } from "./dragdrop"

export default {
  title: "Components / Display / Tree / Examples",
}

export const DragDrop = context => <StoryPage {...dragdrop} {...context} />

DragDrop.storyName = "DragDrop"
