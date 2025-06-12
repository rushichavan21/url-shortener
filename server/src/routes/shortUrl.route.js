import express from 'express';
const router = express.Router();

import { shortUrlController, shortUrlCustomController, shortUrlWithUserController } from '../controller/shortUrl.controller.js';
import { shortQueryController } from '../controller/shortQuery.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

router.post('/', shortUrlController);
router.post('/create/user',authMiddleware, shortUrlWithUserController);
router.post('/create/user/custom',authMiddleware, shortUrlCustomController);
router.get('/:id',shortQueryController);
export default router;