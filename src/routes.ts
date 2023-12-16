import {Router, Request, Response} from 'express'
import CarController from './controllers/CarController';

const carController = new CarController;

const router = Router();


router.get('/cars', carController.getAll);

router.get('/car/:id', carController.getById);

router.post('/car', carController.add);

router.put('/car/:id', carController.update);
router.delete('/car/:id', carController.delete);



export default router;