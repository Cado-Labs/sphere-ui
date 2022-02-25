import React from "react"

import { StoryPage } from "@components"

import { tabView } from "./tabView"

export default {
  title: "Components / Display",
}

export const TabView = context => <StoryPage {...tabView} {...context} />

TabView.storyName = "TabView"
