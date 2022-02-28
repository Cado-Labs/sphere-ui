import { Dash } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.dash"

const code = `
function DashExample () {
  return (
    <div className="p-card s-container">
      Total count: {Dash}
    </div>
  )
}
`

export const dash = {
  header: "Dash",
  content: i18n.t(`${I18N_PREFIX}.content`),
  code,
  scope: { Dash },
}
