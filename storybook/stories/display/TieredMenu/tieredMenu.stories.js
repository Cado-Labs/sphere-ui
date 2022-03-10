import React from "react"

import { StoryPage } from "@components"

import { tieredMenu } from "./tieredMenu"

export default {
  title: "Components / Display",
}

export const TieredMenu = context => <StoryPage {...tieredMenu} {...context} />

TieredMenu.storyName = "TieredMenu"
