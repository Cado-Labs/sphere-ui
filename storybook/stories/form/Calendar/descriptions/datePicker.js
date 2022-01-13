/* eslint-disable max-len */
import { DatePicker } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.datepicker"

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
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { DatePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", default: "''", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", default: "''", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "locale", type: "string", default: "current locale", description: `${I18N_PREFIX}.props.locale` },
    { name: "dateFormat", type: "string", default: "dd.mm.yy", description: `${I18N_PREFIX}.props.date_format` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.year_range` },
    { name: "mode", type: "string", default: "default", description: `${I18N_PREFIX}.props.mode` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.on_change` },
    { name: "showIcon", type: "boolean", default: true, description: `${I18N_PREFIX}.props.show_icon` },
    { name: "rangeButtonsBar", type: "boolean", default: false, description: `${I18N_PREFIX}.props.range_buttons_bar` },
    { name: "monthNavigator", type: "boolean", default: true, description: `${I18N_PREFIX}.props.month_navigator` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "startRangeOfYears", type: "string", default: "2010", description: `${I18N_PREFIX}.props.start_range_of_years` },
  ],
}
