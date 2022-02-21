import i18n, { I18nextProvider } from "@i18n"

import "../styles/global.scss"

const decorators = [
  storyFn => (
    <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
  ),
]

const parameters = {
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
  },
}

export {
  decorators,
  parameters,
}
