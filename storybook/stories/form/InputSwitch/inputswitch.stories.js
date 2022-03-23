import React from "react"

import { StoryPage } from "@components"

import { inputswitch } from "./inputswitch"

export default {
  title: "Components / Form",
}

export const InputSwitch = context => <StoryPage {...inputswitch} {...context} />

InputSwitch.storyName = "InputSwitch"
