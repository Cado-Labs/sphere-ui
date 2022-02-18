import React from "react"

import { StoryPage } from "@components"

import { breadCrumb } from "./breadCrumb"

export default {
  title: "Components / Display",
}

export const BreadCrumb = context => <StoryPage {...breadCrumb} {...context} />

BreadCrumb.storyName = "BreadCrumb"
