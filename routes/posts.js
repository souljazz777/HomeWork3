const express = require('express')
const router = express.Router()
const Postcontrollers = require('../controllers/posts')

router.get('/', Postcontrollers.HomePage)
router.get('/find', Postcontrollers.find)
router.post('/post', Postcontrollers.add)
router.delete('/deletes', Postcontrollers.deletes)
router.delete('/delete/:id', Postcontrollers.delete)
router.patch('/patch/:id', Postcontrollers.Update)

module.exports = router;