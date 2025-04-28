// TODO:
/**
 * 
 Need rate limiting on server side 
 Monitor for weird patterns like many submissions in a short ammount of time 
 Content security policy headers on the server to block scripts 
 Header restriction 
 */
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
