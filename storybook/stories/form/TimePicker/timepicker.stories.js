import React from "react"

import { StoryPage } from "@components"

import { timePicker } from "./timePicker"

export default {
  title: "Components / Form",
}

export const TimePicker = context => <StoryPage {...timePicker} {...context} />

TimePicker.storyName = "TimePicker"
