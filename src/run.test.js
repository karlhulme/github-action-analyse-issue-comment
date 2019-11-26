/* eslint-env jest */
const run = require('./run')

const createComment = (author, commentBody) => ({
  user: {
    login: author
  },
  body: commentBody
})

const createInput = (authorisedLoginsCsv, author, commentBody) => ({
  authorisedLoginsCsv,
  commentJson: JSON.stringify(createComment(author, commentBody))
})

test('Analyse will find an authorised release on the master branch.', async () => {
  await expect(run(createInput('owner , boss', 'boss', 'perform a --release:master'))).resolves.toEqual({ instruction: 'release', branchName: 'master' })
})

test('Analyse will find an authorised release on an lts branch.', async () => {
  await expect(run(createInput(' owner,boss', 'boss', 'perform a --release:lts_v2'))).resolves.toEqual({ instruction: 'release', branchName: 'lts_v2' })
})

test('Analyse will not find an unauthorised release.', async () => {
  await expect(run(createInput('owner,boss ', 'pilot', 'perform a --release:lts_v2'))).resolves.toEqual({})
})

test('Analyse will ignore a comments that contains no instructions.', async () => {
  await expect(run(createInput('owner, boss', 'boss', 'we should do a release soon'))).resolves.toEqual({})
})

test('Analyse will reject a request with no authorised logins CSV.', async () => {
  await expect(run({ commentJson: '{}' })).resolves.toEqual({ analysisFailureReason: 'Error: Authorised logins list not supplied.' })
})

test('Analyse will reject a request with no comment json.', async () => {
  await expect(run({ authorisedLoginsCsv: 'owner,boss' })).resolves.toEqual({ analysisFailureReason: 'Error: Comment JSON not supplied.' })
})
