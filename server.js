import express from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import sanitizeHtml from 'sanitize-html'
import * as z from 'zod'
const app = express()

// Trust the proxy if behind one (important for correct IP detection)
app.set('trust proxy', 1) // or true

// Security headers
app.use(helmet())

// Body parser
app.use(express.json())

// Serve static files (not rate limited) - Should I be adding a rate limit here? 
app.use('/', express.static('dist'))

// Zod schema
const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3)
    .max(50)
    .nonempty(),
  lastName: z
    .string()
    .trim()
    .min(3)
    .max(50)
    .nonempty(),
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .nonempty(),
  message: z
    .string()
    .trim()
    .min(10)
    .max(1000)
    .nonempty(),
  phone: z
    .string()
    .trim()
    .max(25)
    .optional()
    .or(z.literal('')),
})


// Sanitize helper
const sanitizeInput = (input) =>
  typeof input === 'string'
    ? sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} })
    : input

// Rate limiter ONLY for form endpoint
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // allow 10 requests per IP for the form submission
  message: 'Too many form submissions. Please try again later.',
})

// GET homepage
app.get('/', (req, res) => {
  res.send('mamati')
})

// POST form submission with rate limiting
app.post('/api/form/data', formLimiter, (req, res) => {
  console.log('Server got a hit')

  const rawFormData = req.body

  const sanitizedFormData = {
    firstName: sanitizeInput(rawFormData.firstName),
    lastName: sanitizeInput(rawFormData.lastName),
    email: sanitizeInput(rawFormData.email),
    phone: sanitizeInput(rawFormData.phone),
    message: sanitizeInput(rawFormData.message),
  }

  const result = formSchema.safeParse(sanitizedFormData)

  if (!result.success) {
    console.error('Validation errors:', result.error.format())
    return res.status(400).json({ errors: result.error.format() })
  }

  console.log('Sanitized and validated form data: ', result.data)
  res.status(200).json({ message: 'Form received', data: result.data })
})

// Server start
const PORT = 5000
app.listen(PORT, () => {
  console.log(`-----------------------------`)
  console.log(`Backend running on port ${PORT}`)
  console.log(`-----------------------------`)
})