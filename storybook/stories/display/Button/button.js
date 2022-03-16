/* eslint-disable max-len */

import { Button } from "@cadolabs/sphere-ui"
import i18n from "@i18n"

const I18N_PREFIX = "stories.button"

const code = `
function ButtonExample () {
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  const onLoadingClick1 = () => {
    setLoading1(true);
    setTimeout(() => setLoading1(false), 2000);
  }

  const onLoadingClick2 = () => {
    setLoading2(true);
    setTimeout(() => setLoading2(false), 2000);
  }

  return (
    <div className="p-card s-container button-demo">
      <h3>Basic</h3>
      <Button label="Submit" />
      <Button label="Disabled" disabled />
      <Button label="Link" className="p-button-link" />

      <h3>Icons</h3>
      <Button icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" iconPos="right" />

      <h3>Loading</h3>
      <Button loading />
      <Button label="Submit" loading />
      <Button label="Submit" iconPos="right" loading />
      <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
      <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />


      <h3>Severities</h3>
      <Button label="Primary" />
      <Button label="Secondary" className="p-button-secondary" />
      <Button label="Success" className="p-button-success" />
      <Button label="Info" className="p-button-info" />
      <Button label="Warning" className="p-button-warning" />
      <Button label="Help" className="p-button-help" />
      <Button label="Danger" className="p-button-danger" />

      <h3>Raised Buttons</h3>
      <Button label="Primary" className="p-button-raised" />
      <Button label="Secondary" className="p-button-raised p-button-secondary" />
      <Button label="Success" className="p-button-raised p-button-success" />
      <Button label="Info" className="p-button-raised p-button-info" />
      <Button label="Warning" className="p-button-raised p-button-warning" />
      <Button label="Help" className="p-button-raised p-button-help" />
      <Button label="Danger" className="p-button-raised p-button-danger" />

      <h3>Rounded Buttons</h3>
      <Button label="Primary" className="p-button-rounded" />
      <Button label="Secondary" className="p-button-rounded p-button-secondary" />
      <Button label="Success" className="p-button-rounded p-button-success" />
      <Button label="Info" className="p-button-rounded p-button-info" />
      <Button label="Warning" className="p-button-rounded p-button-warning" />
      <Button label="Help" className="p-button-rounded p-button-help" />
      <Button label="Danger" className="p-button-rounded p-button-danger" />

      <h3>Text Buttons</h3>
      <Button label="Primary" className="p-button-text" />
      <Button label="Secondary" className="p-button-secondary p-button-text" />
      <Button label="Success" className="p-button-success p-button-text" />
      <Button label="Info" className="p-button-info p-button-text" />
      <Button label="Warning" className="p-button-warning p-button-text" />
      <Button label="Help" className="p-button-help p-button-text" />
      <Button label="Danger" className="p-button-danger p-button-text" />
      <Button label="Plain" className="p-button-text p-button-plain" />

      <h3>Raised Text Buttons</h3>
      <Button label="Primary" className="p-button-raised p-button-text" />
      <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
      <Button label="Success" className="p-button-raised p-button-success p-button-text" />
      <Button label="Info" className="p-button-raised p-button-info p-button-text" />
      <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
      <Button label="Help" className="p-button-raised p-button-help p-button-text" />
      <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
      <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />

      <h3>Outlined Buttons</h3>
      <Button label="Primary" className="p-button-outlined" />
      <Button label="Secondary" className="p-button-outlined p-button-secondary" />
      <Button label="Success" className="p-button-outlined p-button-success" />
      <Button label="Info" className="p-button-outlined p-button-info" />
      <Button label="Warning" className="p-button-outlined p-button-warning" />
      <Button label="Help" className="p-button-outlined p-button-help" />
      <Button label="Danger" className="p-button-outlined p-button-danger" />

      <h3>Rounded Icon Buttons</h3>
      <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" />
      <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
      <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
      <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" />
      <Button icon="pi pi-heart" className="p-button-rounded p-button-help" />
      <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
      <Button icon="pi pi-check" className="p-button-rounded" />

      <h3>Rounded Text Icon Buttons</h3>
      <Button icon="pi pi-check" className="p-button-rounded p-button-text" />
      <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" />
      <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
      <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
      <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" />
      <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" />
      <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
      <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" />

      <h3>Rounded and Outlined Icon Buttons</h3>
      <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" />
      <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" />
      <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" />
      <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" />
      <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" />
      <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" />
      <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" />

      <h3>Button Set</h3>
      <span className="p-buttonset">
        <Button label="Save" icon="pi pi-check" />
        <Button label="Delete" icon="pi pi-trash" />
        <Button label="Cancel" icon="pi pi-times" />
      </span>

      <h3>Sizes</h3>
      <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
      <Button label="Normal" icon="pi pi-check" className="p-button"  />
      <Button label="Large" icon="pi pi-check" className="p-button-lg" />
    </div>
    )
  }
`

export const button = {
  component: "Button",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Button },
  descriptionProps: [
    { name: "label", type: "string", description: `${I18N_PREFIX}.props.label` },
    { name: "icon", type: "any", description: `${I18N_PREFIX}.props.icon` },
    { name: "iconPos", type: "string", default: "left", description: `${I18N_PREFIX}.props.iconPos` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "disabled", type: "boolean", default: "false", description: `${I18N_PREFIX}.props.disabled` },
    { name: "loading", type: "boolean", default: "false", description: `${I18N_PREFIX}.props.loading` },
    { name: "loadingIcon", type: "any", description: `${I18N_PREFIX}.props.loadingIcon` },
  ],
}
