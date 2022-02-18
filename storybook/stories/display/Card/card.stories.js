import React from "react"

import { StoryPage } from "@components"

import { card } from "./card"

export default {
  title: "Components / Display",
}

export const Card = context => <StoryPage {...card} {...context} />
