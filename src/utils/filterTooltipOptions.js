import { filterOptions } from "./filterOptions"

const POSSIBLE_PARAMS = [
  "id",
  "disabled",
  "className",
  "style",
  "position",
  "at",
  "event",
  "showEvent",
  "hideEvent",
  "autoZIndex",
  "baseZIndex",
  "showDelay",
  "hideDelay",
  "autoHide",
  "showOnDisabled",
  "onShow",
  "onHide",
]

export const filterTooltipOptions = options => {
  return filterOptions(options, POSSIBLE_PARAMS)
}
