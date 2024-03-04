import React from "react"

import { StoryPage } from "@components"

import { rating } from "./rating"

export default {
  title: "Components / Form",
}

export const Rating = context => <StoryPage {...rating} {...context} />

Rating.storyName = "Rating"
