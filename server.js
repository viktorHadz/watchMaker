// TODO:
/**
 * 
 Need rate limiting on server side 
 Monitor for weird patterns like many submissions in a short ammount of time 
 Content security policy headers on the server to block scripts 
 Header restriction 
 */
import express from 'express'
import * as z from 'zod'

const app = express()

app.use(express.json())
app.use('/', express.static('dist'))
app.get('/', (req, res) => {
  res.send('mamati')
})
app.post('/api/form/data', (req, res) => {
  console.log('Server got a hit');
  const formData = req.body
  console.log('Form data', formData);

  res.send(formData)
})
const PORT = 5000
app.listen(PORT, () => {
  console.log(`App running on port - ${PORT}`);
})
