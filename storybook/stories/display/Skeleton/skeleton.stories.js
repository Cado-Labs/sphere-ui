import React from "react"

import { StoryPage } from "@components"

import { skeleton } from "./skeleton"

export default {
  title: "Components / Display",
}

export const Skeleton = context => <StoryPage {...skeleton} {...context} />
