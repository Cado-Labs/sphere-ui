/* eslint-disable max-len */
const links = {
  nvm: "https://github.com/nvm-sh/nvm",
  yarn: "https://yarnpkg.com/",
  git: "https://git-scm.com/",
  quickstart: "https://docs.github.com/en/get-started/quickstart/fork-a-repo",
  pullRequest: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",

}

const codes = {
  clone: `
git clone git@github.com:Cado-Labs/sphere-ui.git
cd sphere-ui
`,

  newBranch: `
git pull origin main
git checkout -b your-branch-name
`,

  lint: `
yarn lint # Linting javascript and style files
yarn sb:lint # Linting javascript, styles and .yml files at storybook folder
`,

  build: `
yarn build --watch # Runs the project with the ability to watch for changes and recompile
yarn link # Create a symlink in @cadolabs/sphere-ui
cd storybook
yarn link @cadolabs/sphere-ui # Pin the symlink
yarn install # Install dependencies
yarn storybook # Run storybook
`,

  pullRequest: `
git add -A
git commit -m 'COMMIT MESSAGE'
git push -u origin BRANCH_NAME
`,
}

const I18N_PREFIX = "stories.contributing"

export {
  links,
  codes,
  I18N_PREFIX,
}
