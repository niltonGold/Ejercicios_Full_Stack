import express from 'express';
import { getTVsCtrl, createTVCtrl, getTVByIdCtrl } from './tv.controller.js';

const router = express.Router();

router.route('/')
      .get(getTVsCtrl)
      .post(createTVCtrl);

router.route('/:id')
      .get(getTVByIdCtrl)

export default router;