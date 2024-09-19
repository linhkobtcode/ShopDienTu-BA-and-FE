import { Router } from 'express';
import { container } from 'tsyringe';
import { HoaDonController } from '../controllers/hoadonController';
const hoaDonRouter = Router();
const hoaDonController = container.resolve(HoaDonController);
hoaDonRouter.post('/create', hoaDonController.createHoaDon.bind(hoaDonController));
export default hoaDonRouter;