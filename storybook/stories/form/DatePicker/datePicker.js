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
    <div className="p-card sh-container">
      <div className="sh-grid">
        <div className="sh-field-col-3">
          <label htmlFor="date">DatePicker</label>
          <DatePicker
            name="date"
            value={fields.date}
            onChange={onChange}
          />
        </div>
        <div className="sh-field-col-3">
          <label htmlFor="rangeDate">DateRangePicker</label>
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
    { name: "dateFormat", type: "string", default: "dd.mm.yy", description: `${I18N_PREFIX}.props.dateFormat` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.yearRange` },
    { name: "mode", type: "string", default: "default", description: `${I18N_PREFIX}.props.mode` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.onChange` },
    { name: "showIcon", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showIcon` },
    { name: "rangeButtonsBar", type: "boolean", default: false, description: `${I18N_PREFIX}.props.rangeButtonsBar` },
    { name: "monthNavigator", type: "boolean", default: true, description: `${I18N_PREFIX}.props.monthNavigator` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "startRangeOfYears", type: "string", default: "2010", description: `${I18N_PREFIX}.props.startRangeOfYears` },
    { name: "mask", type: "string", default: null, description: `${I18N_PREFIX}.props.mask` },
  ],
}
