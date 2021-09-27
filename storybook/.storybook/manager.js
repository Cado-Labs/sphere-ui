import { addons } from "@storybook/addons"
import themes from "./theme"

addons.setConfig({
  theme: themes,
  panelPosition: 'bottom',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: true, },
    zoom: { hidden: true, },
    eject: { hidden: true, },
    copy: { hidden: true, },
    fullscreen: { hidden: true, },
  },
})
