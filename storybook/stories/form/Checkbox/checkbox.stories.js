import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Form",
}

export const Checkbox = context => <StoryPage {...descriptions.checkbox} {...context} />
