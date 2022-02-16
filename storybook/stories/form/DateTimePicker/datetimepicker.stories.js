import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import { dateTimePicker } from "./dateTimePicker"

storiesOf("Components/ Form", module)
  .add("DateTimePicker", context => <StoryPage {...dateTimePicker} {...context} />)
