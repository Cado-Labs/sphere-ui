import React from "react"

import { StoryPage } from "@components"

import { confirmDialogPage } from "./confirmDialog"

export default {
  title: "Components / Display",
}

export const ConfirmDialog = context => <StoryPage {...confirmDialogPage} {...context} />

ConfirmDialog.storyName = "confirmDialog"
