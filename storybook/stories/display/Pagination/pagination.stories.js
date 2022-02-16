import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

storiesOf("Components/ Display / Pagination", module)
  .add("Pagination", context => <StoryPage {...descriptions.pagination} {...context} />)
