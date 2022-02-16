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
    <div className="p-card s-container">
      <div className="s-grid">
        <div className="s-field-col-3">
          <label htmlFor="dateTime">DateTimePicker</label>
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
    { name: "dateFormat", type: "string", default: "dd.mm.yy", description: `${I18N_PREFIX}.props.dateFormat` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.yearRange` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.onChange` },
    { name: "showIcon", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showIcon` },
    { name: "monthNavigator", type: "boolean", description: `${I18N_PREFIX}.props.monthNavigator` },
    { name: "showSeconds", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showSeconds` },
    { name: "showMillisec", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showMillisec` },
    { name: "stepHour", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepHour` },
    { name: "stepSecond", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepSecond` },
    { name: "stepMinute", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepMinute` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "viewDate", type: "date", default: null, description: `${I18N_PREFIX}.props.viewDate` },
    { name: "mask", type: "string", default: null, description: `${I18N_PREFIX}.props.mask` },
  ],
}
