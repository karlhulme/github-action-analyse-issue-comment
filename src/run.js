const considerRelease = require('./considerRelease')

/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ authorisedLoginsCsv, commentJson }) => {
  try {
    if (!authorisedLoginsCsv) throw new Error('Authorised logins list not supplied.')
    if (!commentJson) throw new Error('Comment JSON not supplied.')

    const authorisedLogins = authorisedLoginsCsv.split(',').map(s => s.trim())
    const comment = JSON.parse(commentJson)

    const isAuthorised = authorisedLogins.includes(comment.user.login)

    if (isAuthorised) {
      return considerRelease(comment.body) || {} // || considerSomethingElse(comment.body)
    } else {
      return {}
    }
  } catch (err) {
    return {
      analysisFailureReason: err.toString()
    }
  }
}

module.exports = run
