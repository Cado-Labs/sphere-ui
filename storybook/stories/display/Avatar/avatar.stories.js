import React from "react"

import { StoryPage } from "@components"

import { avatar } from "./avatar"

export default {
  title: "Components / Display",
}

export const Avatar = context => <StoryPage {...avatar} {...context} />
