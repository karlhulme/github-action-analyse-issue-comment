/**
 * Considers if a comment contains the instruction to perform a publish
 * and if so returns the parts of that instruction.
 * @param {String} commentBody The body of a comment.
 */
const considerPublish = commentBody => {
  const matches = commentBody.match(/[-][-]publish:[a-zA-Z0-9_-]+/g)

  if (matches && matches.length === 1) {
    const branchName = matches[0].replace('--publish:', '')

    return {
      instruction: 'publish',
      branchName: branchName
    }
  }

  return null
}

module.exports = considerPublish
