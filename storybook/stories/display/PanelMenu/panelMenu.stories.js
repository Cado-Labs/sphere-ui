import React from "react"

import { StoryPage } from "@components"

import { panelMenu } from "./panelMenu"

export default {
  title: "Components / Display",
}

export const PanelMenu = context => <StoryPage {...panelMenu} {...context} />

PanelMenu.storyName = "PanelMenu"
