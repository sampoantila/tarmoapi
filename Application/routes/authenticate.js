import express from 'express';
import authenticateController from '../controller/authenticateController';

const router = express.Router();

router.route('/')
    .get(authenticateController.authenticate);

export default router;
