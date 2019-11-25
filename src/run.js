const core = require('@actions/core')

const run = async () => {
  console.log('start')
  const authorisedLogins = core.getInput('authorisedLogins')
  console.log(authorisedLogins)
  const commentAuthor = core.getInput('commentAuthor')
  console.log(commentAuthor)
  const commentBody = core.getInput('commentBody')
  console.log(commentBody)

  core.setOutput('instruction', 'dive_into_snow')
  // const author = (comment.user || {}).login
  // console.log(`Author: ${author}`)
  // const isAuthorisedUser = authorisedLogins.includes(author)
  // console.log(`isAuthUser: ${isAuthorisedUser}`)

  // console.log(`Authorised logins '${authorisedLogins.join('|')}' wrote: ${comment.body}`)
}

module.exports = run
