import React from "react"

import { StoryPage } from "@components"

import { dynamic } from "./dynamic"

export default {
  title: "Components / Table / DataTable / Examples",
}

export const Dynamic = context => <StoryPage {...dynamic} {...context} />
