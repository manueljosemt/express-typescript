import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
