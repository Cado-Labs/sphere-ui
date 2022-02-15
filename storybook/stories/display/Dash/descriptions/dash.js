import { Dash } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.dash"

const code = `
function DashExample () {
  return (
    <div className="p-card sh-container">
      Total count: {Dash}
    </div>
  )
}
`

export const dash = {
  header: "Dash",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Dash },
}
