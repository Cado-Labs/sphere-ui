import React from "react"

import { StoryPage } from "@components"

import { fieldset } from "./fieldset"

export default {
  title: "Components / Display",
}

export const Fieldset = context => <StoryPage {...fieldset} {...context} />
