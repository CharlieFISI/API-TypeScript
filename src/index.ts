import express from 'express'

import subsRouter from './routes/subs'

const app = express()
app.use(express.json())
const port = 3000

app.get('/ping', (_req, res) => {
  console.log('Alguien ha hecho ping ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/subs', subsRouter)

app.listen(port, () => console.log(`¡Servidor conectado al puerto ${port}!`))
