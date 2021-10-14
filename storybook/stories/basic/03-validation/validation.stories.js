import React from "react"
import { storiesOf } from "@storybook/react"

import { Validation } from "./Validation"

storiesOf("Basics/Валидация форм", module)
  .add("Инструмент", () => <Validation />)
