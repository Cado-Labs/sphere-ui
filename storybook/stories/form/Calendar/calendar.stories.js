import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import { basic } from "./basic"

storiesOf("Form/ Calendar", module)
  .add("Описание", context => <StoryPage {...basic} {...context} />)
