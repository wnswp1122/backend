import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('Bye WorldS') //미들웨어 함수
})

app.listen(3000)  