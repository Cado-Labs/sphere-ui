import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Form/ MultiSelect", module)
  .add("Description", context => <StoryPage {...descriptions.multiSelect} {...context} />)
