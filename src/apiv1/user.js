import express from 'express'
import { newAccount, login } from '../controllers/user'
import getJsonData from "../middlewares/getJsonData";

const router = express.Router()

router.post('/login', getJsonData, login)
router.post('/new-account', getJsonData, newAccount)

export default router;