import express from 'express'

import { authMiddleware } from '../middleware/auth.middleware.js';
import { getAllController } from '../controller/getAll.controller.js';
const router=express.Router();
router.get('/viewall',authMiddleware,getAllController);
export default router;