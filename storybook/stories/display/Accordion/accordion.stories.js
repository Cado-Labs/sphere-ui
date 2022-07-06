import React from "react"

import { StoryPage } from "@components"

import { accordion } from "./accordion"

export default {
  title: "Components / Display",
}

export const Accordion = context => <StoryPage {...accordion} {...context} />

Accordion.storyName = "Accordion"
