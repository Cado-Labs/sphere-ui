import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Display / Badge", module)
  .add("Badge", context => <StoryPage {...descriptions.badge} {...context} />)
