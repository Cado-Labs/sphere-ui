import { Dash } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.dash"

const code = `
function DashExample () {
  return ("Total count: " + Dash)
}
`

export const dash = {
  header: "Dash",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Dash },
}
