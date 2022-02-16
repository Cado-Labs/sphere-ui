import React from "react"

import { StoryPage } from "@components"

import { datePicker } from "./datePicker"

export default {
  title: "Components/ Form",
}

export const DatePicker = context => <StoryPage {...datePicker} {...context} />

DatePicker.story = {
  name: "DatePicker",
}
