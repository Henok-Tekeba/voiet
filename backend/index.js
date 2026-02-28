require('dotenv').config()
const express = require('express')
const cors = require('cors')
const waitlistRouter = require('./routes/waitlist')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }))

app.use('/waitlist', waitlistRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})