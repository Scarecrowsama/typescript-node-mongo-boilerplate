import express from 'express'
import addMiddlewares from './middlewares'
import setUpRoutes from './routes'

const app = express()

addMiddlewares(app)
setUpRoutes(app)

export default app
