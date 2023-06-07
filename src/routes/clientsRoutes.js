import { Router } from 'express';
import clientsController from '../controllers/ClientsController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', clientsController.index);
router.get('/registers', clientsController.indexClientsName);
router.post('/', clientsController.store);
router.post('/:id/phone', clientsController.storePhone);
// router.put('/:id/phone', clientsController.storePhone);
// router.put('/:id', loginRequired, clientsController.update);
router.get('/:id', clientsController.show);
router.delete('/:id', clientsController.delete);

export default router;
