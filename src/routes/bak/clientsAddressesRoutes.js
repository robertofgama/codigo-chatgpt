import { Router } from 'express';
import clientsAddressesController from '../controllers/ClientsAddressesController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', clientsAddressesController.index);
router.post('/', clientsAddressesController.store);
// router.put('/:id', loginRequired, clientsAddressesController.update);
// router.get('/:id', loginRequired, clientsAddressesController.show);
// router.delete('/:id', loginRequired, clientsAddressesController.delete);

export default router;
