import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Display / Spinner", module)
  .add("Spinner", context => <StoryPage {...descriptions.spinner} {...context} />)
