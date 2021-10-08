import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Form/ Calendar", module)
  .add("DatePicker", context => <StoryPage {...descriptions.datePicker } {...context} />)
  .add("DateTimePicker", context => <StoryPage {...descriptions.dateTimePicker } {...context} />)
  .add("TimePicker", context => <StoryPage {...descriptions.timePicker } {...context} />)
