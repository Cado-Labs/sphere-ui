import React from "react"

import { StoryPage } from "@components"

import { selection } from "./selection"

export default {
  title: "Components / Table / DataTable / Examples",
}

export const Selection = context => <StoryPage {...selection} {...context} />
