import { I18nextProvider } from 'react-i18next'
import i18n from '@i18n';

import "../styles/global.scss"

export const decorators = [
  storyFn => (
    <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Getting started",
        ["Installation", "Concept", "Contributing"],
        "Layouts",
        ["Description"],
        "Components",
      ],
    },
  }
}
