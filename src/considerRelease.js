/**
 * Considers if a comment contains the instruction to perform a release
 * and if so returns the parts of that instruction.
 * @param {String} commentBody The body of a comment.
 */
const considerRelease = commentBody => {
  const matches = commentBody.match(/[-][-]release:[a-zA-Z0-9_-]+/g)

  if (matches && matches.length === 1) {
    const branchName = matches[0].replace('--release:', '')

    return {
      instruction: 'release',
      branchName: branchName
    }
  }

  return null
}

module.exports = considerRelease
