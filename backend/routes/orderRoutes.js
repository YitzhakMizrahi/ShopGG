import express from 'express'
const router = express.Router()
import { addorderItems, getOrderById } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addorderItems)
router.route('/:id').get(protect, getOrderById)

export default router
