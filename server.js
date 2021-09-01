const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Welcome! This is BlackBeard\'s web server...')
})

app.listen(port, () => {
  console.log(`App listening at port:${port}`)
})