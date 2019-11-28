/**
 * Considers if a comment contains the instruction to perform a publish
 * and if so returns the parts of that instruction.
 * @param {String} commentBody The body of a comment.
 */
const considerPublish = commentBody => {
  const matches = commentBody.match(/[-][-]publish:v[0-9]+[.][0-9]+[.][0-9]+/g)

  if (matches && matches.length === 1) {
    const releaseVersion = matches[0].replace('--publish:', '')

    return {
      instruction: 'publish',
      releaseVersion
    }
  }

  return null
}

module.exports = considerPublish
