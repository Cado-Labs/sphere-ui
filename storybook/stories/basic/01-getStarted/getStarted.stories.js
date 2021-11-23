import React from "react"
import { storiesOf } from "@storybook/react"

import { GetStarted } from "./GetStarted"

storiesOf("Basics/Beginning of work", module)
  .add("Introduction", () => <GetStarted />)
