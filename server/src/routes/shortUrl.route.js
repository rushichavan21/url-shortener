import express from 'express';
const router = express.Router();

import { shortUrlController } from '../controller/shortUrl.controller.js';
import { shortQueryController } from '../controller/shortQuery.controller.js';

router.post('/', shortUrlController);
router.get('/:id',shortQueryController);
export default router;