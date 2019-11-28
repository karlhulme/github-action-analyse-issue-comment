/* eslint-env jest */
const considerPublish = require('./considerPublish')

test('Consider publish will match a reference to a version number.', async () => {
  expect(considerPublish('--publish:v10.2.3')).toEqual({ instruction: 'publish', releaseNumber: 'v10.2.3' })
  expect(considerPublish('we can now do a --publish:v0.0.12.')).toEqual({ instruction: 'publish', releaseNumber: 'v0.0.12' })
})

test('Consider publish will ingore multiple matches.', async () => {
  expect(considerPublish('--publish:v1.2.0 or --publish:v0.0.12 or others')).toEqual(null)
})

test('Consider publish will not match a comment that contains no publish instruction.', async () => {
  expect(considerPublish('we should think about a publish on master')).toEqual(null)
  expect(considerPublish('publish:v22.0.0 really soon')).toEqual(null)
})
