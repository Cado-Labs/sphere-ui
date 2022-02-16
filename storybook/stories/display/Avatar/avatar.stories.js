import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Components/ Display / Avatar", module)
  .add("Avatar", context => <StoryPage {...descriptions.avatar} {...context} />)
