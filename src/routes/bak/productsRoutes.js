import { Router } from 'express';
import productsController from '../controllers/ProductsController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, productsController.index);
router.post('/', loginRequired, productsController.store);
router.put('/:id', loginRequired, productsController.update);

export default router;
