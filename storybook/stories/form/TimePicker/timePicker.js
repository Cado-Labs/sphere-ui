/* eslint-disable max-len */
import { TimePicker } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.timepicker"

const code = `
function TimePickerExample () {
  const [fields, setFields] = React.useState({
    time: new Date(),
  })

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="p-card sh-container">
      <div className="sh-grid">
        <div className="sh-field-col-3">
          <label htmlFor="time">TimePicker</label>
          <TimePicker
            name="time"
            value={fields.time}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}
`

export const timePicker = {
  header: "TimePicker",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { TimePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", default: "''", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "dateFormat", type: "string", description: `${I18N_PREFIX}.props.dateFormat` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.yearRange` },
    { name: "mode", type: "string", description: `${I18N_PREFIX}.props.mode` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.onChange` },
    { name: "showIcon", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showIcon` },
    { name: "showSeconds", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showSeconds` },
    { name: "showMillisec", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showMillisec` },
    { name: "stepHour", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepHour` },
    { name: "stepSecond", type: "number", description: `${I18N_PREFIX}.props.stepSecond` },
    { name: "stepMinute", type: "number", description: `${I18N_PREFIX}.props.stepMinute` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "viewDate", type: "date", default: null, description: `${I18N_PREFIX}.props.viewDate` },
  ],
}
