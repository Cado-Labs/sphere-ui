const code = {
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
# navigate to storybook folder
cd storybook
# install dependencies
yarn install
# from the storybook folder use
yarn storybook
`,
}

const I18N_PREFIX = "stories.installation"

export {
  code,
  I18N_PREFIX,
}
