import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { SanPhamService } from '../services/sanphamService';

@injectable()
export class SanPhamController {
  constructor(private sanPhamService: SanPhamService
  ) { }

  async getSanPhamAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.sanPhamService.getSanPhamAll();
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getSanPhamById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const sanpham = await this.sanPhamService.getSanPhamById(id);
      if (sanpham) {
        res.json(sanpham);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getSanPhamMoi(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.sanPhamService.getSanPhamMoi();
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getSanPhamBC(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.sanPhamService.getSanPhamBC();
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async createSanPham(req: Request, res: Response): Promise<void> {
    const sanpham = req.body;
    try {
      await this.sanPhamService.createSanPham(sanpham);
      res.status(201).json({ message: 'Tạo thành công' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateSanPham(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const sanpham = req.body;

    if (!sanpham.MaSanPham) {
      sanpham.MaSanPham = id; 
    }
    try {
      const result = await this.sanPhamService.updateSanPham(sanpham);
      if (result) {
        res.json({ message: 'Sản phẩm đã được cập nhật thành công.' });
      } else {
        res.status(404).json({ message: 'Không tìm thấy sản phẩm để cập nhật.' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteSanPham(req: Request, res: Response): Promise<void> {
    try {
      const MaSanPham = req.params.id;
      const results = await this.sanPhamService.deleteSanPham(MaSanPham);
      res.json({ message: 'Đã xóa thành công.', success: true });
    } catch (error: any) {
      res.json({ message: error.message, success: false });
    }
  }



}