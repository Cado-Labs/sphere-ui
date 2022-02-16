import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Components/ Form", module)
  .add("Checkbox", context => <StoryPage {...descriptions.checkbox} {...context} />)
