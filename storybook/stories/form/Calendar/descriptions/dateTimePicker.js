/* eslint-disable max-len */
import { DateTimePicker } from "@cadolabs/sphere-ui"

const PREFIX_NAME_LOCALE = "stories.form.calendar.datetimepicker"

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
  content: `${PREFIX_NAME_LOCALE}.content`,
  code,
  scope: { DateTimePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${PREFIX_NAME_LOCALE}.props.id` },
    { name: "ref", type: "string", description: `${PREFIX_NAME_LOCALE}.props.ref`},
    { name: "name", type: "string", description: `${PREFIX_NAME_LOCALE}.props.name` },
    { name: "value", type: "string", description: `${PREFIX_NAME_LOCALE}.props.value` },
    { name: "placeholder", type: "string", description: `${PREFIX_NAME_LOCALE}.props.placeholder` },
    { name: "dateFormat", type: "string", description: `${PREFIX_NAME_LOCALE}.props.date_format` },
    { name: "yearRange", type: "string", description:  `${PREFIX_NAME_LOCALE}.props.year_range` },
    { name: "onChange", type: "function", description: `${PREFIX_NAME_LOCALE}.props.on_change` },
    { name: "showIcon", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.show_icon`},
    { name: "monthNavigator", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.month_navigator` },
    { name: "showSeconds", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.show_seconds` },
    { name: "showMillisec", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.show_millisec` },
    { name: "stepHour", type: "number", description: `${PREFIX_NAME_LOCALE}.props.step_hour` },
    { name: "stepSecond", type: "number", description: `${PREFIX_NAME_LOCALE}.props.step_second` },
    { name: "stepMinute", type: "number", description: `${PREFIX_NAME_LOCALE}.props.step_minute` },
    { name: "disabled", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.disabled` },
  ],
}
