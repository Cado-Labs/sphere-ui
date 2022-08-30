import React from "react"

import { StoryPage } from "@components"

import { templating } from "./templating"

export default {
  title: "Components / Display / Tree / Examples",
}

export const Templating = context => <StoryPage {...templating} {...context} />
