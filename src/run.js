const core = require('@actions/core')
// const { GitHub, context } = require('@actions/github')

const run = async () => {
  const author = core.getInput('author')
  const commentBody = core.getInput('commentBody')

  console.log(`Author '${author}' wrote: ${commentBody}`)
}

module.exports = run
