export const links = {
  nvm: "https://github.com/nvm-sh/nvm",
  yarn: "https://yarnpkg.com/",
  git: "https://git-scm.com/",
  quickstart: "https://docs.github.com/en/get-started/quickstart/fork-a-repo",
  pullRequest: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"

}

export const codes = {
  clone: `
git clone git@github.com:Cado-Labs/sphere-ui.git
cd sphere-ui
`,

  newBranch: `
git pull origin main
git checkout -b your-branch-name
`,

  lint: `
yarn lint:js # Checking javascript code
yarn lint:css # Checking style code
yarn sb:lint # Checking javascript code at storybook
yarn sb:eslint # Checking javascript style at storybook
`,

  build: `
yarn build --watch # Runs the project with the ability to watch for changes and recompile
yarn link # Create a symlink in @cadolabs/sphere-ui
cd storybook
yarn link @cadolabs/sphere-ui # Pin the symlink
yarn storybook # Run storybook
`,

  pullRequest: `
git add -A
git commit -m 'COMMIT MESSAGE'
git push -u origin BRANCH_NAME
`
}

export const I18N_PREFIX = "stories.contributing"
