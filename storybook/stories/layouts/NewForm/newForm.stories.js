import React from "react"
import { storiesOf } from "@storybook/react"

import { NewForm } from "./NewForm"

storiesOf("Layouts/NewForm", module)
  .add("NewForm", context => <NewForm {...context} />)
