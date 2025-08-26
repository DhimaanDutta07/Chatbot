const express = require('express')
const crouter = express.Router()

crouter.get('/chat', (req, res) => {
    return res.render('cb')
})

module.exports = {crouter}
