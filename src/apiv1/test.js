import express from 'express';
import getJsonData from '../middlewares/getJsonData'
import { testPost } from '../controllers/test'
const router = express.Router()

router.post('/', getJsonData, testPost)

export default router;