const core = require('@actions/core')
// const { GitHub, context } = require('@actions/github')

const run = async () => {
  // const { owner } = context.repo
  console.log('start')
  const authorisedLogins = core.getInput('authorisedLogins').split(',')
  const comment = core.getInput('comment')

  const author = (comment.user || {}).login
  console.log(`Author: ${author}`)
  const isAuthorisedUser = authorisedLogins.includes(author)
  console.log(`isAuthUser: ${isAuthorisedUser}`)

  console.log(`Authorised logins '${authorisedLogins.join('|')}' wrote: ${comment.body}`)
}

module.exports = run
