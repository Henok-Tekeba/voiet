const express = require('express')
const router = express.Router()
const pool = require('../db')

router.post('/', async (req, res) => {
  try {
    const { email, company } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const existing = await pool.query('SELECT * FROM waitlist WHERE email = $1', [email])

    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'You are already on the waitlist' })
    }

    await pool.query(
      'INSERT INTO waitlist (email, company) VALUES ($1, $2)',
      [email, company || null]
    )

    res.status(201).json({ message: 'You are on the waitlist' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router