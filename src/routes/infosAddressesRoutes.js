import { Router } from 'express';
import infosAddressesController from '../controllers/InfosAddressesController';

const router = new Router();

router.get('/', infosAddressesController.index);
router.post('/', infosAddressesController.store);
// router.put('/:id', loginRequired, infosAddressesController.update);
// router.get('/:id', loginRequired, infosAddressesController.show);
// router.delete('/:id', loginRequired, infosAddressesController.delete);

export default router;
