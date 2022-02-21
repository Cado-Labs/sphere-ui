import React from "react"

import { StoryPage } from "@components"

import { dateTimePicker } from "./dateTimePicker"

export default {
  title: "Components / Form",
}

export const DateTimePicker = context => <StoryPage {...dateTimePicker} {...context} />

DateTimePicker.storyName = "DateTimePicker"
