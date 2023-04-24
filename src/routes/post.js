import express from 'express'
import * as postController from '../controllers/post'
import { verifyToken, isHost, isAdmin } from '../middlewares/verifyToken'

const router = express.Router()

router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/one', postController.getPostById)
router.get('/new-post', postController.getNewPosts)
router.post('/report', postController.reportPost)
router.put('/expired', verifyToken, isAdmin, postController.plusExpired)
router.get('/get-exp', verifyToken, isAdmin, postController.getExpireds)
router.put('/plus', verifyToken, isAdmin, postController.plusExpired)
router.get('/get-rp', verifyToken, isAdmin, postController.getReports)
router.put('/update-rp', verifyToken, isAdmin, postController.updateReport)
router.delete('/remove-rp', verifyToken, isAdmin, postController.deleteReport)
router.get('/dashboard', verifyToken, isAdmin, postController.getDashboard)

router.use(verifyToken)
router.post('/ratings', postController.ratings)
router.post('/wishlist', postController.updateWishlist)
router.use(isHost)
router.post('/create-new', postController.createNewPost)
router.post('/request-expired', postController.requestExpired)
router.get('/limit-admin', postController.getPostsLimitAdmin)
router.put('/update', postController.updatePost)
router.delete('/delete', postController.deletePost)



export default router