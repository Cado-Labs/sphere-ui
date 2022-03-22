import React from "react"

import { StoryPage } from "@components"

import { tag } from "./tag"

export default {
  title: "Components / Display",
}

export const Tag = context => <StoryPage {...tag} {...context} />
