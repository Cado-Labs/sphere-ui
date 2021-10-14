import React from "react"
import { storiesOf } from "@storybook/react"

import { Castomization } from "./Castomization"
import { Themes } from "./Themes"
import { Overriding } from "./Overriding"

storiesOf("Basics/Кастомизация", module)
  .add("Виды", () => <Castomization />)
  .add("Прокидывание темы", () => <Themes />)
  .add("Переопределение стилей", () => <Overriding />)
