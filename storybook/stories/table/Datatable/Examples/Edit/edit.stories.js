import React from "react"

import { StoryPage } from "@components"

import { edit } from "./edit"

export default {
  title: "Components / Table / DataTable / Examples",
}

export const Edit = context => <StoryPage {...edit} {...context} />
