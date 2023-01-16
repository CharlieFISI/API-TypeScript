import express from "express"

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Entradas de los diarios')
})

router.post('/', function (_req, res) {
  res.send('Guardando diario')
})

export default router