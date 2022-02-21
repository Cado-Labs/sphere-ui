import React from "react"

import { StoryPage } from "@components"

import { spinner } from "./spinner"

export default {
  title: "Components / Display",
}

export const Spinner = context => <StoryPage {...spinner} {...context} />
