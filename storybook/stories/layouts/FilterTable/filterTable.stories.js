import React from "react"
import { storiesOf } from "@storybook/react"

import { FilterTable } from "./FilterTable"

storiesOf("Layouts/FilterTable", module)
  .add("FilterTable", context => <FilterTable {...context} />)
