/* eslint-disable max-len */
import { DatePicker } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.datepicker"

const code = `
function DatePickerExample () {
  const [fields, setFields] = React.useState({
    date: new Date(),
    rangeDate: [new Date(), new Date()],
  })

  const minDate = new Date()

  const month = new Date().getMonth()
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 1)

  const minDate2 = new Date()
  minDate2.setYear(minDate2.getFullYear() - 1)
  const maxDate2 = new Date()
  maxDate2.setYear(maxDate2.getFullYear() + 5)

  const onChange = event => {
    const target = event.target

    setFields(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="p-card s-container">
      <div className="s-grid">
        <div className="s-field-col-3">
          <label htmlFor="date">DatePicker</label>
          <DatePicker
            name="date"
            value={fields.date}
            onChange={onChange}
          />
        </div>
        <div className="s-field-col-3">
          <label htmlFor="rangeDate">DateRangePicker</label>
          <DatePicker
            name="rangeDate"
            value={fields.rangeDate}
            onChange={onChange}
            mode="range"
          />
        </div>
        <div className="s-field-col-3">
          <label htmlFor="minmax">Min / Max</label>
          <DatePicker
            name="minmax"
            value={fields.minmax}
            onChange={onChange}
            minDate={minDate}
            maxDate={maxDate}
            readOnlyInput
          />
        </div>
        <div className="s-field-col-3">
          <label htmlFor="minmax">Min / Max with yearRange</label>
          <DatePicker
            name="minmax2"
            value={fields.minmax2}
            onChange={onChange}
            minDate={minDate2}
            maxDate={maxDate2}
            yearRange="2010:2040"
            readOnlyInput
          />
        </div>
      </div>
    </div>
  )
}
`

const formatDateTimeParams = [
  { name: "date", description: "Selected date" },
]

const parseDateTimeParams = [
  { name: "text", description: "Input text" },
]

const onChangeParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "New date" },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

const onInputParams = [
  { name: "event", description: "Browser event" },
]

const onSelectParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "Selected date" },
]

const onVisibleChangeParams = [
  { name: "visible", description: "Whether the overlay is visible" },
  { name: "type", description: "Action type when the overlay is visible/hidden" },
  { name: "callback", description: "It is used to refocus the input field in some cases when the overlay is hidden." },
]

export const datePicker = {
  component: "DatePicker",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { DatePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", default: "''", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", default: "''", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "dateFormat", type: "string", default: "dd.mm.yy", description: `${I18N_PREFIX}.props.dateFormat` },
    { name: "yearRange", type: "string", description: `${I18N_PREFIX}.props.yearRange` },
    { name: "mode", type: "string", default: "default", description: `${I18N_PREFIX}.props.mode` },
    { name: "showIcon", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showIcon` },
    { name: "monthNavigator", type: "boolean", default: true, description: `${I18N_PREFIX}.props.monthNavigator` },
    { name: "yearNavigator", type: "boolean", default: true, description: `${I18N_PREFIX}.props.yearNavigator` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "startRangeOfYears", type: "string", default: "2010", description: `${I18N_PREFIX}.props.startRangeOfYears` },
    { name: "mask", type: "string", default: null, description: `${I18N_PREFIX}.props.mask` },
    { name: "minDate", type: "Date", default: null, description: `${I18N_PREFIX}.props.minDate` },
    { name: "maxDate", type: "Date", default: null, description: `${I18N_PREFIX}.props.maxDate` },
    { name: "startCalendarDate", type: "Date", default: new Date("2010-01-01T00:00"), description: `${I18N_PREFIX}.props.startCalendarDate` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "inputClassName", type: "string", description: `${I18N_PREFIX}.props.inputClassName` },
    { name: "inputStyle", type: "object", description: `${I18N_PREFIX}.props.inputStyle` },
    { name: "panelClassName", type: "string", description: `${I18N_PREFIX}.props.panelClassName` },
    { name: "panelStyle", type: "object", description: `${I18N_PREFIX}.props.panelStyle` },
    { name: "numberOfMonths", type: "number", default: 1, description: `${I18N_PREFIX}.props.numberOfMonths` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "readOnlyInput", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnlyInput` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "autoZIndex", type: "boolean", default: true, description: `${I18N_PREFIX}.props.autoZIndex` },
    { name: "baseZIndex", type: "number", default: 50, description: `${I18N_PREFIX}.props.baseZIndex` },
    { name: "keepInvalid", type: "boolean", default: true, description: `${I18N_PREFIX}.props.keepInvalid` },
    { name: "utc", type: "boolean", default: false, description: `${I18N_PREFIX}.props.utc` },
    { name: "includeRangeButtons", type: "array", default: "[ ]", description: `${I18N_PREFIX}.props.includeRangeButtons` },
    { name: "excludeRangeButtons", type: "array", default: "[ ]", description: `${I18N_PREFIX}.props.excludeRangeButtons` },
  ],
  eventDescriptionProps: [
    { name: "formatDateTime", params: formatDateTimeParams, description: `${I18N_PREFIX}.props.formatDateTime` },
    { name: "parseDateTime", params: parseDateTimeParams, description: `${I18N_PREFIX}.props.parseDateTime` },
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
    { name: "onInput", params: onInputParams, description: `${I18N_PREFIX}.props.onInput` },
    { name: "onSelect", params: onSelectParams, description: `${I18N_PREFIX}.props.onSelect` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
    { name: "onVisibleChange", params: onVisibleChangeParams, description: `${I18N_PREFIX}.props.onVisibleChange` },
  ],
}
