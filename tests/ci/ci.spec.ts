import { CI } from '@/ci/ci'

describe('CI Test to trigger Coveralls', () => {
  test('Should create a new CI class', async () => {
    const ci = new CI()
    ci.init()
    expect(ci).toBeTruthy()
  })
})
