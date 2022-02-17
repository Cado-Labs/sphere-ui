import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components / Display",
}

export const Button = context => <StoryPage {...descriptions.button} {...context} />
