const express = require('express')
const router = express.Router()
const ATHELETE_DATA = require('../mock/ATHELETE_DATA')

router.get('/athletes', (req, res) => {
  res.json(ATHELETE_DATA);
})

module.exports = router
