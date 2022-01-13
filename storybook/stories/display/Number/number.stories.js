import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Display / Number", module)
  .add("Number", context => <StoryPage {...descriptions.number} {...context} />)
