import React from "react"

import { StoryPage } from "@components"

import { dropdown } from "./dropdown"

export default {
  title: "Components / Form",
}

export const Dropdown = context => <StoryPage {...dropdown} {...context} />
