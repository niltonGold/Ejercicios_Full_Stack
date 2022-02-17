import express from "express";

import {createUsersCtrl} from './users.controller.js';

const router = express.Router();

router.route('/login')
    .post(createUsersCtrl);

export default router;      