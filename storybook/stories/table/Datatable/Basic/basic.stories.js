import React from "react"

import { StoryPage } from "@components"

import { basic } from "./basic"

export default {
  title: "Components / Table / DataTable",
}

export const Basic = context => <StoryPage {...basic} {...context} />
