const core = require('@actions/core')

const run = async () => {
  console.log('start')
  const authorisedLogins = core.getInput('authorisedLogins').split(',')
  console.log(authorisedLogins.join('|'))
  const commentJson = core.getInput('commentJson')
  const comment = JSON.parse(commentJson)
  console.log('Author ' + comment.user.login)
  console.log('Body ' + comment.body)

  core.setOutput('instruction', 'dive_into_snow')
  // const author = (comment.user || {}).login
  // console.log(`Author: ${author}`)
  // const isAuthorisedUser = authorisedLogins.includes(author)
  // console.log(`isAuthUser: ${isAuthorisedUser}`)

  // console.log(`Authorised logins '${authorisedLogins.join('|')}' wrote: ${comment.body}`)
}

module.exports = run
