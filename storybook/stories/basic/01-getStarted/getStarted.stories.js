import React from "react"
import { storiesOf } from "@storybook/react"

import { GetStarted } from "./GetStarted"

storiesOf("Basics/Начало работы", module)
  .add("Введение", () => <GetStarted />)
