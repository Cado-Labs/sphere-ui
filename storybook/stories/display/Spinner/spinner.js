/* eslint-disable max-len */
import { Spinner, Button } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.spinner"

const code = `
function SpinnerExample () {
  const [loading1, setLoading1] = React.useState(true)
  const [loading2, setLoading2] = React.useState(true)

  const toggleLoading1 = () => setLoading1(!loading1)
  const toggleLoading2 = () => setLoading2(!loading2)

  return (
    <div>
      <div className="p-card s-container mb-3">
        <div className="m-2">Controlled by 'loading' props</div>
        <div className="col-1">
          <Button onClick={toggleLoading1}>Toggle</Button>
        </div>
        <div className="col-2">
          <Spinner loading={loading1}>Some content</Spinner>
        </div>
      </div>

      <div className="p-card s-container mb-3">
        <div className="m-2">Controlled by condition</div>
        <div className="col-1">
          <Button onClick={toggleLoading2}>Toggle</Button>
        </div>
        <div className="col-2">{loading2 ? <Spinner /> : "Some content"}</div>
      </div>

      <div className="p-card s-container">
        <div className="m-2">Small size</div>
        <div className="w-2rem">
          <Spinner style={{ height: "50px", width: "50px" }} strokeWidth="10" />
        </div>
      </div>
    </div>
  )
}
`

export const spinner = {
  component: "Spinner",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Spinner, Button },
  descriptionProps: [
    { name: "loading", type: "boolean", default: true, description: `${I18N_PREFIX}.props.loading` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "strokeWidth", type: "string", default: "2", description: `${I18N_PREFIX}.props.strokeWidth` },
  ],
}
