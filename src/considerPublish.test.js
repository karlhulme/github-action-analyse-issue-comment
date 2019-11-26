/* eslint-env jest */
const considerPublish = require('./considerPublish')

test('Consider publish will match a reference to the master branch.', async () => {
  expect(considerPublish('--publish:master.')).toEqual({ instruction: 'publish', branchName: 'master' })
  expect(considerPublish('we can now do a --publish:master.')).toEqual({ instruction: 'publish', branchName: 'master' })
})

test('Consider publish will match a reference to an lts branch.', async () => {
  expect(considerPublish('--publish:lts_v2')).toEqual({ instruction: 'publish', branchName: 'lts_v2' })
  expect(considerPublish('--publish:lts_v2 next')).toEqual({ instruction: 'publish', branchName: 'lts_v2' })
})

test('Consider publish will ingore multiple matches.', async () => {
  expect(considerPublish('--publish:master or --publish:lts_v2 or others')).toEqual(null)
})

test('Consider publish will not match a comment that contains no publish instruction.', async () => {
  expect(considerPublish('we should think about a publish on master')).toEqual(null)
  expect(considerPublish('publish:lts_v2 really soon')).toEqual(null)
})
