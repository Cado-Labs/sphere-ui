import React from "react"

import { StoryPage } from "@components"

import { image } from "./image"

export default {
  title: "Components / Display",
}

export const Image = context => <StoryPage {...image} {...context} />
