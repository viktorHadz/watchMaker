import express from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import sanitizeHtml from 'sanitize-html'
import * as z from 'zod'

const app = express()

// Use Helmet to set secure HTTP headers
app.use(helmet())

// Rate limit: max 50 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1,
  message: 'Too many requests, please try again later.',
})
app.use(limiter)

// Body parser
app.use(express.json())
app.use('/', express.static('dist'))

app.get('/', (req, res) => {
  res.send('mamati')
})

// Sanitize helper
const sanitizeInput = (input) =>
  typeof input === 'string'
    ? sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} })
    : input

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

// Handle form submission
app.post('/api/form/data', (req, res) => {
  console.log('Server got a hit')

  const rawFormData = req.body

  // Sanitized fields
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

  // Everything should be validated and sanitized 
  console.log('Sanitized and validated form data: ', result.data)
  res.status(200).json({ message: 'Form received', data: result.data })
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`-----------------------------`)
  console.log(`Backend running on port ${PORT}`)
  console.log(`-----------------------------`)
})
