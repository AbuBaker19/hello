const express = require('express');
const { Register, GetData } = require('./userCtrl');
const router = express.Router();

router.post('/register', Register);
router.get('/getdata', GetData);

module.exports = router