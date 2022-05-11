const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Builder 2.0!')
})

app.listen(port, () => {
  console.log(`Buildpack app listening on port ${port}`)
})
