var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');

//admin login route
router.post('/login', adminController.postLogin);
router.post('/addCategory',adminController.postCategory)

module.exports = router;
