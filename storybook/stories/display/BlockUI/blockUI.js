/* eslint-disable max-len */
import { BlockUI, Button, Checkbox } from "@cadolabs/sphere-ui"
import i18n from "@i18n"

const I18N_PREFIX = "stories.blockui"

const code = `
function BlockUIExample () {
  const [blockedPanel, setBlockedPanel] = React.useState(false)
  const [accepted, setAccepted] = React.useState(false)

  const blockPanel = () => {
    setBlockedPanel(true)
  }

  const unblockPanel = () => {
    setBlockedPanel(false)
  }

  return (
    <div className="p-card s-container">
      <h3>Block content</h3>
      <Button type="button" label="Block" onClick={blockPanel} className="mr-2 p-button-secondary" />
      <Button type="button" label="Unblock" onClick={unblockPanel} className="p-button-secondary" />

      <BlockUI blocked={blockedPanel} className="w-5">
        <div className="border-solid w-5 p-2 mt-2">
          <p style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
          <div className="field-checkbox">
            <Checkbox inputId="accept-input" checked={accepted} onChange={e => setAccepted(e.checked)} />
            <label htmlFor="accept-input">Accept</label>
          </div>
          <Button type="button" label="Send" onClick={() => alert("Accepted? " + accepted)} className="mr-2" />
        </div>
      </BlockUI>
    </div>
  )
}
`

export const blockUI = {
  header: "BlockUI",
  content: i18n.t(`${I18N_PREFIX}.content`),
  code,
  scope: { BlockUI, Button, Checkbox },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "blocked", type: "boolean", default: false, description: `${I18N_PREFIX}.props.blocked` },
    { name: "baseZIndex", type: "number", default: 50, description: `${I18N_PREFIX}.props.baseZIndex` },
    { name: "autoZIndex", type: "boolean", default: true, description: `${I18N_PREFIX}.props.autoZIndex` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
  ],
}
