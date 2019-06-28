import express from 'express';
import groupController from '../controller/groupController';

const router = express.Router();

router.route('/')
    .get(groupController.list)
    .post(groupController.create);

router.route('/:groupId')
    .get(groupController.get)
    .put(groupController.update)
    .delete(groupController.delete);

export default router;
