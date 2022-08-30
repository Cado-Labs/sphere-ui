import React from "react"

import { StoryPage } from "@components"

import { lazy } from "./lazy"

export default {
  title: "Components / Display / Tree / Examples",
}

export const Lazy = context => <StoryPage {...lazy} {...context} />
