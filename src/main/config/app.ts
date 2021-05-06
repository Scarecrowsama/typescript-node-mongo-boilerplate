import express from 'express'
import addMiddlewares from './middlewares'

const app = express()

addMiddlewares(app)

export default app
