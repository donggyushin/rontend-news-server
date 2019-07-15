import express from 'express';
import Test from './test'
import User from './user'
const router = express.Router()

router.use('/test', Test)
router.use('/user', User)

export default router;