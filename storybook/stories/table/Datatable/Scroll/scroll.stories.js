import React from "react"

import { StoryPage } from "@components"

import { scroll } from "./scroll"

export default {
  title: "Components / Table / DataTable",
}

export const Scroll = context => <StoryPage {...scroll} {...context} />
