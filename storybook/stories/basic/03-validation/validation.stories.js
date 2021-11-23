import React from "react"
import { storiesOf } from "@storybook/react"

import { Validation } from "./Validation"

storiesOf("Basics/Form validation", module)
  .add("Tool", () => <Validation />)
