import { Router } from 'express';
import { container } from 'tsyringe';
import { GioiThieuController } from '../controllers/gioithieuController';

const gioiThieuRouter = Router();
const gioiThieuController = container.resolve(GioiThieuController);
gioiThieuRouter.get('/get-all', gioiThieuController.getGioiThieuAll.bind(gioiThieuController));

export default gioiThieuRouter;