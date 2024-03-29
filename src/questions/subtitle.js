const inquirer = require("inquirer")
const print = require("../print")
const formats = require("../formats")

async function selectSubtitle(legends) {
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "legend",
        message: "Select Subtitle:",
        pageSize: 20,
        choices: formats.yifySubtitle(legends),
      },
    ])

    return result.legend

  } catch (error) {
    print.error(error.message)
  }
}

module.exports = {
  selectSubtitle
}
