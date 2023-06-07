import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UsersController.index);
router.post('/', UsersController.store);
router.put('/:id', loginRequired, UsersController.update);

export default router;
