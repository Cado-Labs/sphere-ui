/* eslint-disable max-len */
import { DateTimePicker } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.datetimepicker"

const code = `
function DateTimePickerExample () {
  const [fields, setFields] = React.useState({
    dateTime: new Date(),
  })

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="fluid grid formgrid">
      <div className="field col">
        <label htmlFor="dateTime">DateTimePicker</label>
        <div>
          <DateTimePicker
            name="dateTime"
            value={fields.dateTime}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}
`

export const dateTimePicker = {
  header: "DateTimePicker",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { DateTimePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", default: "''", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "dateFormat", type: "string", description: `${I18N_PREFIX}.props.date_format` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.year_range` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.on_change` },
    { name: "showIcon", type: "boolean", default: false, description: `${I18N_PREFIX}.props.show_icon` },
    { name: "monthNavigator", type: "boolean", description: `${I18N_PREFIX}.props.month_navigator` },
    { name: "showSeconds", type: "boolean", default: true, description: `${I18N_PREFIX}.props.show_seconds` },
    { name: "showMillisec", type: "boolean", default: false, description: `${I18N_PREFIX}.props.show_millisec` },
    { name: "stepHour", type: "number", default: 1, description: `${I18N_PREFIX}.props.step_hour` },
    { name: "stepSecond", type: "number", default: 1, description: `${I18N_PREFIX}.props.step_second` },
    { name: "stepMinute", type: "number", default: 1, description: `${I18N_PREFIX}.props.step_minute` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
  ],
}
