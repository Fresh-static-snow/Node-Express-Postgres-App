const Router = require('express')
const postController = require('../controller/post.controller')
const router = new Router()


router.post('/user', postController.createPost)
router.get('/user', postController.getPostsByUser)


module.exports = router