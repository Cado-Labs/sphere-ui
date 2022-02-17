import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Display / Card",
}

export const Card = context => <StoryPage {...descriptions.card} {...context} />
