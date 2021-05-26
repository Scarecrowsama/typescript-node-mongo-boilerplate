import { MongoHelper as sut } from '@/main/helpers/'

describe('MongoHelper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if client is down', async () => {
    let collection = await sut.getCollection('users')
    expect(collection).toBeTruthy()
    await sut.disconnect()
    collection = await sut.getCollection('users')
    expect(collection).toBeTruthy()
  })
})
