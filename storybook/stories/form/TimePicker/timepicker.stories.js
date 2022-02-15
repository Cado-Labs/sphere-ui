import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import { timePicker } from "./timePicker"

storiesOf("Components/ Form", module)
  .add("TimePicker", context => <StoryPage {...timePicker} {...context} />)
