import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Display / Avatar",
}

export const Avatar = context => <StoryPage {...descriptions.avatar} {...context} />
