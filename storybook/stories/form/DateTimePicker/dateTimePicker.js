/* eslint-disable max-len */
import { DateTimePicker } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.datetimepicker"

const code = `
function DateTimePickerExample () {
  const [fields, setFields] = React.useState({
    dateTime: new Date(),
    dateTime2: new Date(),
  })

  const minDate = new Date()

  const month = new Date().getMonth()
  const nextMonth = (month === 11) ? 0 : month + 1
  const maxDate = new Date()
  maxDate.setMonth(nextMonth)

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
        <div className="s-field-col-3">
          <label htmlFor="minmax">Min / Max</label>
          <DateTimePicker
            name="minmax"
            value={fields.minmax}
            onChange={onChange}
            minDate={minDate}
            maxDate={maxDate}
            readOnlyInput
          />
        </div>
        <div className="s-field-col-3">
        <label htmlFor="dateTime">DateTimePicker with UTC message</label>
          <DateTimePicker
            name="dateTime2"
            value={fields.dateTime2}
            onChange={onChange}
            keepInvalid={false}
            showUTC
            showMillisec
          />
      </div>
      </div>
    </div>
  )
}
`

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

export const dateTimePicker = {
  component: "DateTimePicker",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { DateTimePicker },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", default: "''", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "dateFormat", type: "string", default: "dd.mm.yy", description: `${I18N_PREFIX}.props.dateFormat` },
    { name: "showIcon", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showIcon` },
    { name: "monthNavigator", type: "boolean", default: true, description: `${I18N_PREFIX}.props.monthNavigator` },
    { name: "yearNavigator", type: "boolean", default: true, description: `${I18N_PREFIX}.props.yearNavigator` },
    { name: "showSeconds", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showSeconds` },
    { name: "showMillisec", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showMillisec` },
    { name: "showUTC", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showUTC` },
    { name: "stepHour", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepHour` },
    { name: "stepSecond", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepSecond` },
    { name: "stepMinute", type: "number", default: 1, description: `${I18N_PREFIX}.props.stepMinute` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "viewDate", type: "date", default: null, description: `${I18N_PREFIX}.props.viewDate` },
    { name: "mask", type: "string", default: null, description: `${I18N_PREFIX}.props.mask` },
    { name: "minDate", type: "Date", default: null, description: `${I18N_PREFIX}.props.minDate` },
    { name: "maxDate", type: "Date", default: null, description: `${I18N_PREFIX}.props.maxDate` },
    { name: "startCalendarDate", type: "Date", default: null, description: `${I18N_PREFIX}.props.startCalendarDate` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "inputClassName", type: "string", description: `${I18N_PREFIX}.props.inputClassName` },
    { name: "inputStyle", type: "object", description: `${I18N_PREFIX}.props.inputStyle` },
    { name: "panelClassName", type: "string", description: `${I18N_PREFIX}.props.panelClassName` },
    { name: "panelStyle", type: "object", description: `${I18N_PREFIX}.props.panelStyle` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "readOnlyInput", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnlyInput` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "autoZIndex", type: "boolean", default: true, description: `${I18N_PREFIX}.props.autoZIndex` },
    { name: "baseZIndex", type: "number", default: 50, description: `${I18N_PREFIX}.props.baseZIndex` },
    { name: "keepInvalid", type: "boolean", default: false, description: `${I18N_PREFIX}.props.keepInvalid` },
  ],
  eventDescriptionProps: [
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
