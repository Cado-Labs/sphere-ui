import React from "react"

import { StoryPage } from "@components"

import { chip } from "./chip"

export default {
  title: "Components / Display",
}

export const Chip = context => <StoryPage {...chip} {...context} />
