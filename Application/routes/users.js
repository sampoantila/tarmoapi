import express from 'express';
import userController from '../controller/userController';

var router = express.Router();

router.route('/')
    .get(userController.list)
    .post(userController.create);

router.route('/:userId')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.delete);

router.route('/:userId/picture')
    .get(userController.getPicture)
    .put(userController.storePicture);

export default router;
