import { Coveralls } from '@/coveralls/coveralls'

describe('Coveralls Test to trigger Coveralls', () => {
  test('Should create a new Coveralls class', async () => {
    const ci = new Coveralls()
    ci.init()
    expect(ci).toBeTruthy()
  })
})
