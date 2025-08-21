/* eslint-disable max-len */
import { Fieldset } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.fieldset"

const code = `
function FieldsetExample () {
  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2">
      <span className="font-bold">Some template text</span>
    </div>
  )

  return (
    <>
      <h3>Basic sample</h3>
      <Fieldset legend="Header">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Fieldset>

      <h3>Toggable sample</h3>
      <Fieldset legend="Header" toggleable>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Fieldset>

      <h3>Template sample</h3>
      <Fieldset legend={legendTemplate}>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Fieldset>
    </>
  )
}

`

export const fieldset = {
  component: "Fieldset",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Fieldset },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "collapsed", type: "boolean", default: false, description: `${I18N_PREFIX}.props.collapsed` },
    { name: "collapseIcon", type: "jsx", description: `${I18N_PREFIX}.props.collapseIcon` },
    { name: "expandIcon", type: "jsx", description: `${I18N_PREFIX}.props.expandIcon` },
    { name: "legend", type: "jsx", description: `${I18N_PREFIX}.props.legend` },
    { name: "toggleable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.toggleable` },
    { name: "unstyled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.unstyled` },
  ],

  eventDescriptionProps: [
    { name: "onClick", description: `${I18N_PREFIX}.props.onClick` },
    { name: "onCollapse", description: `${I18N_PREFIX}.props.onCollapse` },
    { name: "onExpand", description: `${I18N_PREFIX}.props.onExpand` },
    { name: "onToggle", description: `${I18N_PREFIX}.props.onToggle` },
  ],
}
