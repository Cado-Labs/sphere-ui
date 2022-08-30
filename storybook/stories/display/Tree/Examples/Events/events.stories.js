import React from "react"

import { StoryPage } from "@components"

import { events } from "./events"

export default {
  title: "Components / Display / Tree / Examples",
}

export const Events = context => <StoryPage {...events} {...context} />
