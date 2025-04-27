import express from 'express'
const app = express()

app.use('/', express.static('dist'))

app.get('/', (req, res) => {
  res.send('mamati')
})
const PORT = 5000

app.listen(PORT, () => {
  console.log(`App running on port - ${PORT}`);
})