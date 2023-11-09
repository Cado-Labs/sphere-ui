import React from "react"

import { StoryPage } from "@components"

import { overlayPanel } from "./overlayPanel"

export default {
  title: "Components / Display",
}

export const OverlayPanel = context => <StoryPage {...overlayPanel} {...context} />
