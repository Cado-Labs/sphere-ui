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
    <div className="fluid grid formgrid">
      <div className="field col">
        <label htmlFor="time">TimePicker</label>
        <div>
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
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "dateFormat", type: "string", description: `${I18N_PREFIX}.props.date_format` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.year_range` },
    { name: "mode", type: "string", description: `${I18N_PREFIX}.props.mode` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.on_change` },
    { name: "showIcon", type: "boolean", description: `${I18N_PREFIX}.props.show_icon` },
    { name: "showSeconds", type: "boolean", description: `${I18N_PREFIX}.props.show_seconds` },
    { name: "showMillisec", type: "boolean", description: `${I18N_PREFIX}.props.show_millisec` },
    { name: "stepHour", type: "number", description: `${I18N_PREFIX}.props.step_hour` },
    { name: "stepSecond", type: "number", description: `${I18N_PREFIX}.props.step_second` },
    { name: "stepMinute", type: "number", description: `${I18N_PREFIX}.props.step_minute` },
    { name: "disabled", type: "boolean", description: `${I18N_PREFIX}.props.disabled` },
  ],
}
