import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import { datePicker } from "./datePicker"

storiesOf("Components/ Form", module)
  .add("DatePicker", context => <StoryPage {...datePicker} {...context} />)
