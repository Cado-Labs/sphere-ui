/* eslint-disable max-len */
import { Spinner, Button } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.spinner"

const code = `
function SpinnerExample () {
  const [loading, setLoading] = React.useState(true)
  const toggleLoading = () => setLoading(!loading)

  return (
    <div className="p-card sh-container">
      <div className="col-1">
        <Button onClick={toggleLoading}>Toggle</Button>
      </div>
      <div className="col-2">
        <Spinner loading={loading}>Some content</Spinner>
      </div>
    </div>
  )
}
`

export const spinner = {
  header: "Spinner",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Spinner, Button },
  descriptionProps: [
    { name: "loading", type: "boolean", description: `${I18N_PREFIX}.props.loading` },
  ],
}
