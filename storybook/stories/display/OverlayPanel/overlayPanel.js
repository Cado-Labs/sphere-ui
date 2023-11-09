/* eslint-disable max-len */
import { OverlayPanel, Button } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.overlayPanel"

const code = `
function OverlayPanelExample() {
    const op = React.useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
        </div>
    );
}
`

export const overlayPanel = {
  component: "OverlayPanel",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { OverlayPanel, Button },
  descriptionProps: [
    { name: "ariaCloseLabel", type: "string", default: "close", description: `${I18N_PREFIX}.props.ariaCloseLabel` },
    { name: "breakpoints", type: "OverlayPanelBreakpoints", default: null, description: `${I18N_PREFIX}.props.breakpoints` },
    { name: "children", type: "ReactNode", default: null, description: `${I18N_PREFIX}.props.children` },
    { name: "closeIcon", type: "IconType<OverlayPanelProps>", default: null, description: `${I18N_PREFIX}.props.closeIcon` },
    { name: "closeOnEscape", type: "boolean", default: true, description: `${I18N_PREFIX}.props.closeOnEscape` },
    { name: "dismissable", type: "boolean", default: true, description: `${I18N_PREFIX}.props.dismissable` },
    { name: "showCloseIcon", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showCloseIcon` },
    { name: "transitionOptions", type: "CSSTransitionProps", default: null, description: `${I18N_PREFIX}.props.transitionOptions` },
    { name: "unstyled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.unstyled` },
  ],
  eventDescriptionProps: [
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
  ],
}
