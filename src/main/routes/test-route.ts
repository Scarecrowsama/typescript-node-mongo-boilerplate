import { Router, Request, Response } from 'express'

export default (router: Router): void => {
  router.get('/', (req: Request, res: Response) => {
    res.status(200).send({ test: 'Test Route' })
  })
}
