import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components / Display",
}

export const Money = context => <StoryPage {...descriptions.money} {...context} />
