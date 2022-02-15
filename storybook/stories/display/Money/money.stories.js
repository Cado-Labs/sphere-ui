import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Components/ Display / Money", module)
  .add("Money", context => <StoryPage {...descriptions.money} {...context} />)
