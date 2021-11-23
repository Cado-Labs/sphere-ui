import React from "react"
import { storiesOf } from "@storybook/react"

import { Castomization } from "./Castomization"
import { Themes } from "./Themes"
import { Overriding } from "./Overriding"

storiesOf("Basics/Castomization", module)
  .add("Types", () => <Castomization />)
  .add("Overriding of styles", () => <Overriding />)
  .add("Themes", () => <Themes />)
