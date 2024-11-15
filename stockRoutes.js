const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.post('/record', stockController.recordTransaction);

module.exports = router;
