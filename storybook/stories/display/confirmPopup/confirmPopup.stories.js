import React from "react"

import { StoryPage } from "@components"

import { confirmPopupPage } from "./confirmPopup"

export default {
  title: "Components / Display",
}

export const ConfirmPopup = context => <StoryPage {...confirmPopupPage} {...context} />

ConfirmPopup.storyName = "confirmPopup"
