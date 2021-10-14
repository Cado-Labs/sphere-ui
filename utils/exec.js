const cp = require("child_process")

const exec = commands => {
  const process = cp.exec(`cd storybook;${commands}`)

  process.stdout.on("data", data => {
    console.log(`stdout: ${data.toString()}`)
  })

  process.stderr.on("data", data => {
    console.log(`stderr: ${data.toString()}`)
  })

  process.on("exit", code => {
    console.log(`child process exited with code ${code.toString()}`)
  })
}

module.exports = { exec }
