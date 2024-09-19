import { Router } from 'express';
import { container } from 'tsyringe';
import { SanPhamController } from '../controllers/sanphamController';

const sanphamRouter = Router();
const sanphamController = container.resolve(SanPhamController);
sanphamRouter.get('/getbyid/:id', sanphamController.getSanPhamById.bind(sanphamController));
sanphamRouter.get('/get-all', sanphamController.getSanPhamAll.bind(sanphamController));
sanphamRouter.get('/get-sanphammoi', sanphamController.getSanPhamMoi.bind(sanphamController));
sanphamRouter.get('/get-sanphambc', sanphamController.getSanPhamBC.bind(sanphamController));
sanphamRouter.post('/create', sanphamController.createSanPham.bind(sanphamController));
sanphamRouter.post('/update/:id', sanphamController.updateSanPham.bind(sanphamController));
sanphamRouter.delete('/delete/:id', sanphamController.deleteSanPham.bind(sanphamController));
export default sanphamRouter;