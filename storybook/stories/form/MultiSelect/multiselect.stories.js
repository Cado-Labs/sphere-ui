import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import { multiSelect } from "./multiSelect"

storiesOf("Components/ Form/ MultiSelect", module)
  .add("MultiSelect", context => <StoryPage {...multiSelect} {...context} />)
