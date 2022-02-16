import React from "react"
import { storiesOf } from "@storybook/react"

import { Description } from "./Description"

storiesOf("Layouts/Description", module)
  .add("Description", context => <Description {...context} />)
