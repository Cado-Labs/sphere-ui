import React from "react"

import { StoryPage } from "@components"

import { toast } from "./toast"

export default {
  title: "Components / Display",
}

export const Toast = context => <StoryPage {...toast} {...context} />
