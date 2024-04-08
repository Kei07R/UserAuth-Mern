import express from 'express';
import { test } from '../controllers/user.controller.js'
import { verfiyToken } from '../utils/verifyUser.js';
import { updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',test);
router.post('/update/:id',verfiyToken, updateUser)
router.delete('/delete/:id',verfiyToken, deleteUser)

export default router