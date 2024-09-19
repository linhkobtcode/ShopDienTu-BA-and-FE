import { Router } from 'express';
import { container } from 'tsyringe';
import { LienHeController } from '../controllers/lienheContrller';

const lienheRouter = Router();
const lienheController = container.resolve(LienHeController);
lienheRouter.get('/get-all', lienheController.getLienHeAll.bind(lienheController));

export default lienheRouter;