import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Display / Number",
}

export const Number = context => <StoryPage {...descriptions.number} {...context} />
