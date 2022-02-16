import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Display / Spinner",
}

export const Spinner = context => <StoryPage {...descriptions.spinner} {...context} />
