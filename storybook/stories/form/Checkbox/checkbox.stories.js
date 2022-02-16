import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Form / Checkbox", module)
  .add("Checkbox", context => <StoryPage {...descriptions.checkbox} {...context} />)
