/* eslint-env jest */
const considerRelease = require('./considerRelease')

test('Consider release will match a reference to the master branch.', async () => {
  expect(considerRelease('--release:master.')).toEqual({ instruction: 'release', branchName: 'master' })
  expect(considerRelease('we can now do a --release:master.')).toEqual({ instruction: 'release', branchName: 'master' })
})

test('Consider release will match a reference to n lts branch.', async () => {
  expect(considerRelease('--release:lts_v2')).toEqual({ instruction: 'release', branchName: 'lts_v2' })
  expect(considerRelease('--release:lts_v2 next')).toEqual({ instruction: 'release', branchName: 'lts_v2' })
})

test('Consider release will ingore multiple matches.', async () => {
  expect(considerRelease('--release:master or --release:lts_v2 or others')).toEqual(null)
})

test('Consider release will not match a comment that contains no release instruction.', async () => {
  expect(considerRelease('we should think about a release on master')).toEqual(null)
  expect(considerRelease('release:lts_v2 really soon')).toEqual(null)
})
