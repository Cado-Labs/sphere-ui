import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Display / Dash", module)
  .add("Dash", context => <StoryPage {...descriptions.dash} {...context} />)
