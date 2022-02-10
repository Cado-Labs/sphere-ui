/* eslint-disable max-len */
import { Dash } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.dash"

const code = `
function DashExample () {
  return (
    <Dash />
  )
}
`

export const dash = {
  header: "Dash",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Dash },
}
