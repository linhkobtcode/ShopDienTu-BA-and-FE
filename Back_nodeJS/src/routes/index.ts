import { Router } from 'express';
import 'reflect-metadata';
import danhmucRouter from './danhmucRouter';
import sanphamRouter from './sanphamRouter'; 
import userRouter from './userRouter';
import { authenticate } from '../middlewares/authMiddleware';
import hoaDonRouter from './hoadonRouter';
import menuRouter from './menuRouter';
import slideRouter from './sliderRouter';
import gioiThieuRouter from './gioithieuRouter';
import lienheRouter from './lienheRouter';
const router = Router();
//router.use('/danh-muc', authenticate, danhmucRouter);
router.use('/danh-muc',danhmucRouter);
router.use('/sanpham', sanphamRouter); 
router.use('/menu',menuRouter);
router.use('/hoa-don', hoaDonRouter);
router.use('/user', userRouter);
router.use('/slide', slideRouter);
router.use('/gioithieu', gioiThieuRouter);
router.use('/lienhe', lienheRouter);



export default router;
