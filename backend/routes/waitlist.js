const express = require('express')
const router = express.Router()
const pool = require('../db')

// POST — join waitlist
router.post('/', async (req, res) => {
  try {
    const { email, company } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValidEmail) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
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

// GET — get all waitlist entries (protected)
router.get('/', async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key']

    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const result = await pool.query(
      'SELECT id, email, company, created_at FROM waitlist ORDER BY created_at DESC'
    )

    res.status(200).json({ count: result.rows.length, entries: result.rows })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router

