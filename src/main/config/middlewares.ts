import { Express } from 'express'
import { cors, bodyParser } from '@/main/middlewares/'

export default (app: Express): void => {
  app.use(cors)
  app.use(bodyParser)
}
