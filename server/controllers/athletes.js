const express = require('express')
const router = express.Router()
const ATHLETE_DATA = require('../data/ATHLETE_DATA')

router.get('/athletes', (req, res) => {
  res.json(ATHLETE_DATA);
})

module.exports = router
