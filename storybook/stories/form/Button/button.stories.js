import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import { basic } from "./basic"

storiesOf("Form/ Button", module)
  .add("Описание", context => <StoryPage {...basic} {...context} />)
  .add("Описание1", context => <StoryPage {...basic} {...context} />)
  .add("Описание3", context => <StoryPage {...basic} {...context} />)
  .add("Описание4", context => <StoryPage {...basic} {...context} />)
  .add("Описание5", context => <StoryPage {...basic} {...context} />)
  .add("Описание6", context => <StoryPage {...basic} {...context} />)
