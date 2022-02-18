import React from "react"

import { StoryPage } from "@components"

import { button } from "./button"

export default {
  title: "Components / Display",
}

export const Button = context => <StoryPage {...button} {...context} />
