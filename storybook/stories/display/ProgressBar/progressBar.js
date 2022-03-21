/* eslint-disable max-len */
import { ProgressBar, Toast } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.progressbar"

const code = `
function ProgressBarExample () {
  const [value1, setValue1] = React.useState(0)
  const toast = React.useRef(null)
  const interval = React.useRef(null)

  const displayValueTemplate = value => {
    return (
      <React.Fragment>
        {value}/<b>100</b>
      </React.Fragment>
    )
  }

  React.useEffect(() => {
    let val = value1
    interval.current = setInterval(() => {
      val += Math.floor(Math.random() * 10) + 1

      if (val >= 100) {
        val = 100
        toast.current.show({ severity: "info", summary: "Success", detail: "Process Completed" })
        clearInterval(interval.current)
      }

      setValue1(val)
    }, 2000)

    return () => {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [])

  return (
    <div>
      <Toast ref={toast} />

      <div className="p-card s-container">
        <h3>Dynamic</h3>
        <ProgressBar value={value1} />

        <h3>Static</h3>
        <ProgressBar value={50} />

        <h3>With another color</h3>
        <ProgressBar value={80} color="#ffd32d" />

        <h3>Custom display value</h3>
        <ProgressBar value={40} displayValueTemplate={displayValueTemplate} />
      </div>
    </div>
  )
}
`

export const progressBar = {
  component: "ProgressBar",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { ProgressBar, Toast },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "value", type: "number", description: `${I18N_PREFIX}.props.value` },
    { name: "showValue", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showValue` },
    { name: "unit", type: "string", default: "%", description: `${I18N_PREFIX}.props.unit` },
    { name: "color", type: "string", description: `${I18N_PREFIX}.props.color` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "displayValueTemplate", type: "ReactNode", description: `${I18N_PREFIX}.props.displayValueTemplate` },
  ],
}
