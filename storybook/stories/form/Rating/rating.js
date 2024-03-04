/* eslint-disable max-len */
import { Rating } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.rating"

const code = `
function RatingExample () {
  const [value1, setValue1] = React.useState(0)
  const [value2, setValue2] = React.useState(0)
  const [value3, setValue3] = React.useState(0)
  const [value4, setValue4] = React.useState(0)

  return (
    <div>
      <div className="p-card s-container flex flex-column gap-3 p-3">
        <div>
          <h3>Basic</h3>
          <Rating value={value1} onChange={e => setValue1(e.value)} />
        </div>

        <div>
          <h3>With cancel</h3>
          <Rating value={value2} onChange={e => (console.log(e), setValue2(e.value))} cancel />
        </div>

        <div>
          <h3>Number of Stars</h3>
          <Rating value={value3} onChange={e => setValue3(e.value)} stars={10} />
        </div>

        <div>
          <h3>ReadOnly</h3>
          <Rating value={5} readOnly />
        </div>

        <div>
          <h3>Disabled</h3>
          <Rating value={4} disabled />
        </div>

        <div>
          <h3>Template</h3>
          <Rating value={value4} onChange={e => setValue4(e.value)} cancel
            cancelIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/cancel.png" alt="custom-cancel-image" width="25px" height="25px" />}
            onIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png" alt="custom-image-active" width="25px" height="25px" />}
            offIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png" alt="custom-image" width="25px" height="25px" />}
          />
        </div>
      </div>
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Selected value" },
]

export const rating = {
  component: "Rating",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Rating },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "value", type: "number", description: `${I18N_PREFIX}.props.value` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "readOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnly` },
    { name: "stars", type: "number", default: 5, description: `${I18N_PREFIX}.props.color` },
    { name: "cancel", type: "boolean", default: false, description: `${I18N_PREFIX}.props.cancel` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "tooltip", type: "string", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "onIcon", type: "ReactNode", description: `${I18N_PREFIX}.props.onIcon` },
    { name: "onIconProps", type: "HTMLAttributes<HTMLSpanElement>", description: `${I18N_PREFIX}.props.onIconProps` },
    { name: "offIcon", type: "ReactNode", description: `${I18N_PREFIX}.props.offIcon` },
    { name: "offIconProps", type: "HTMLAttributes<HTMLSpanElement>", description: `${I18N_PREFIX}.props.offIconProps` },
    { name: "cancelIcon", type: "ReactNode", description: `${I18N_PREFIX}.props.cancelIcon` },
    { name: "cancelIconProps", type: "HTMLAttributes<HTMLSpanElement>", description: `${I18N_PREFIX}.props.cancelIconProps` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
  ],
}
