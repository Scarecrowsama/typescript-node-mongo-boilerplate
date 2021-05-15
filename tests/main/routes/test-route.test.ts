import request from 'supertest'
import app from '@/main/config/app'

describe('Test Route', () => {
  test('Should return 200 on success', async () => {
    await request(app)
      .get('/api/')
      .expect(200)
  })
})
