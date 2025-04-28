import express from 'express'
const router = express.Router()
router.use(express.json())

// all requests to router will first hit this middleware
router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})
// Next router should then allow the frontend to sen informationg and call next 
// Then the next router should receive and validate the data 
router.get('/api/form/:data', (req, res) => {
  // const formData = req.params
  res.send(`Sending data: ${req.params.data}`)
})
