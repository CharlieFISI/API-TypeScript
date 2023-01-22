import express from 'express'
import * as subsServices from '../services/subsService'
// import toNewSubsEntry from '../_utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(subsServices.getEntriesWithoutSensivityInfo())
})

router.get('/:id', (req, res) => {
  const subs = subsServices.findById(+req.params.id)

  return (subs != null)
    ? res.send(subs)
    : res.sendStatus(404)
})

/* router.post('/', (req, res) => {
  try {
    const newSubsEntry = toNewSubsEntry(req.body)

    const addedSubsEntry = subsServices.addSubs(newSubsEntry)

    res.json(addedSubsEntry)
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)

    res.status(400).send(message)
  }
}) */

export default router
