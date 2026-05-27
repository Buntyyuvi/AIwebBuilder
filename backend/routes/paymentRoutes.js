import exprss from 'express'
import { createOrder, verifyPayment } from '../controllers/paymentController.js'
import { isAuthenticated } from '../middleware/isAuthenticated.js'

const router = exprss.Router();

router.post("/createorder",isAuthenticated, createOrder)
router.post("/verifypayment",isAuthenticated, verifyPayment)

export default router