import express from 'express'
const router = express.Router()
import { addorderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addorderItems)

export default router
