export const code = {
  installation: `
npm i @cadolabs/sphere-ui
# OR
yarn add @cadolabs/sphere-ui
`,
  import: `
import * as UI from @cadolabs/sphere-ui
# OR
import { MultiSelect} from @cadolabs/sphere-ui
`,
  styles: `
# from js file
import '@cadolabs/sphere-ui/dist/index.css'
# from css file
@import '~@cadolabs/sphere-ui/dist/index.css'
`,
  storybook: `
# from root folder
yarn sb:start
# from the storybook folder use
yarn storybook
`
}

export const I18N_PREFIX = "stories.installation"

