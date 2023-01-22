import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())
const port = 3000

app.get('/ping', (_req, res) => {
  console.log('Alguien ha hecho ping ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(port, () => console.log(`¡Servidor conectado al puerto ${port}!`))
