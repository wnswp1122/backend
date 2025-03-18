import express from 'express'

const app = express()

app.get('/qqq', function (req, res) {
  res.send('Hello World') //미들웨어 함수
})

app.listen(3000)