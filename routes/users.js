var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
const { memoryStorage } = require('multer');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get('/',userController.getHome)
router.post('/story_writer',upload.single('source'),userController.postStory_writer)
router.post('/story_teller',upload.single('file'),userController.postStory_teller)
router.post('/get_in_touch',userController.postGetInTouch)
router.post('/subscription',userController.postSubscription_request)
router.get('/featured_story_storyWritters',userController.getStroyWriters)
//storyTellers
//audio vidoe seperate
// router.post('/memebership',userController.signup)
router.post

module.exports = router;

