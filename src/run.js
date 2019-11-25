const considerRelease = require('./considerRelease')

/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ authorisedLoginsCsv, commentJson }) => {
  const authorisedLogins = authorisedLoginsCsv.split(',').map(s => s.trim())
  const comment = JSON.parse(commentJson)

  const isAuthorised = authorisedLogins.includes(comment.user.login)

  if (isAuthorised) {
    return considerRelease(comment.body) || {} // || considerSomethingElse(comment.body)
  } else {
    return {}
  }
}

module.exports = run
