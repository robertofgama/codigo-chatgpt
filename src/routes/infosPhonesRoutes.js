import { Router } from 'express';
import infosPhonesController from '../controllers/InfosPhonesController';

const router = new Router();

router.get('/', infosPhonesController.index);
router.post('/', infosPhonesController.store);
// router.put('/:id', loginRequired, infosPhonesController.update);
// router.get('/:id', loginRequired, infosPhonesController.show);
// router.delete('/:id', loginRequired, infosPhonesController.delete);

export default router;
