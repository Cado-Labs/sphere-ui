import React from "react"

import { StoryPage } from "@components"

import { blockUI } from "./blockUI"

export default {
  title: "Components / Display",
}

export const BlockUI = context => <StoryPage {...blockUI} {...context} />

BlockUI.storyName = "BlockUI"
