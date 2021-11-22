/* eslint-disable max-len */
import { DatePicker } from "@cadolabs/sphere-ui"

const PREFIX_NAME_LOCALE = "stories.form.calendar.datepicker"

const code = `
function DatePickerExample () {
  const [fields, setFields] = React.useState({
    date: new Date(),
    rangeDate: [new Date(), new Date]
  })

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="card">
      <div className="fluid grid formgrid">
        <div className="field col-fixed">
          <label htmlFor="date">DatePicker</label>
          <div>
            <DatePicker
              name="date"
              value={fields.date}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="field col-fixed">
          <label htmlFor="rangeDate">DateRangePicker</label>
          <div>
            <DatePicker
              name="rangeDate"
              value={fields.rangeDate}
              onChange={onChange}
              mode="range"
              rangeButtonsBar
            />
          </div>
        </div>
      </div>
    </div>
  )
}
`

export const datePicker = {
  header: "DatePicker",
  content: `${PREFIX_NAME_LOCALE}.content`,
  code,
  scope: { DatePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${PREFIX_NAME_LOCALE}.props.id` },
    { name: "ref", type: "string", description: `${PREFIX_NAME_LOCALE}.props.ref` },
    { name: "name", type: "string", description: `${PREFIX_NAME_LOCALE}.props.name` },
    { name: "value", type: "string", description: `${PREFIX_NAME_LOCALE}.props.value` },
    { name: "placeholder", type: "string", description: `${PREFIX_NAME_LOCALE}.props.placeholder` },
    { name: "dateFormat", type: "string", description: `${PREFIX_NAME_LOCALE}.props.date_format` },
    { name: "yearRange", type: "string", description: `${PREFIX_NAME_LOCALE}.props.year_range` },
    { name: "mode", type: "string", description: `${PREFIX_NAME_LOCALE}.props.mode` },
    { name: "onChange", type: "function", description: `${PREFIX_NAME_LOCALE}.props.on_change` },
    { name: "showIcon", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.show_icon` },
    { name: "rangeButtonsBar", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.range_buttons_bar` },
    { name: "monthNavigator", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.month_navigator` },
    { name: "disabled", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.disabled` },
  ],
}
