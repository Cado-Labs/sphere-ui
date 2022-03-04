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
  if (!options) return null
  const entries = Object.entries(options).filter(([key]) => POSSIBLE_PARAMS.includes(key))
  return Object.fromEntries(entries)
}
