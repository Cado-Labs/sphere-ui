import React from "react"

import { StoryPage } from "@components"

import { message } from "./message"

export default {
  title: "Components / Display",
}

export const Message = context => <StoryPage {...message} {...context} />
