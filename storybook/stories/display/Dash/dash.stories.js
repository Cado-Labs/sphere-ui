import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Display / Dash",
}

export const Dash = context => <StoryPage {...descriptions.dash} {...context} />
