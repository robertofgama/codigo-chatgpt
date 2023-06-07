import { Router } from 'express';
import UsersFunctionsController from '../controllers/UsersFunctionsController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, UsersFunctionsController.index);
router.post('/', loginRequired, UsersFunctionsController.store);

export default router;
