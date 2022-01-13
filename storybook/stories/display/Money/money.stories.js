import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Display / Money", module)
  .add("Money", context => <StoryPage {...descriptions.money} {...context} />)
