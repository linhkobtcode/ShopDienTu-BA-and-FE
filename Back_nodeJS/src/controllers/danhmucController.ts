import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DanhMucService } from '../services/danhmucService';

@injectable()
export class DanhMucController {
  constructor(private danhMucService: DanhMucService
  ) { }

  async getDanhMucById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.danhMucService.getDanhMucById(id);
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getDanhMucAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.danhMucService.getDanhMucAll();
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async updateDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const danhmuc = req.body as { danh_muc_id: any, ten_danh_muc: any };
      const results = await this.danhMucService.updateDanhMuc(danhmuc);
      res.json({ message: 'Đã cập nhật thành công', results: true });
    } catch (error: any) {
      res.json({ message: error.message, results: false });
    }
  }

  async deleteDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const results = await this.danhMucService.deleteDanhMuc(id);
      res.json({ message: 'Đã xóa thành công.', success: true });
    } catch (error: any) {
      res.json({ message: error.message, success: false });
    }
  }

  async searchDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const object = req.body as { pageIndex: number, pageSize: number, search_content: string };
      const data: any = await this.danhMucService.searchDanhMuc(object.pageIndex, object.pageSize, object.search_content);
      if (data) {
        res.json({
          totalItems: Math.ceil(data && data.length > 0 ? data[0].RecordCount : 0),
          page: object.pageIndex,
          pageSize: object.pageSize,
          data: data,
          pageCount: Math.ceil((data && data.length > 0 ? data[0].RecordCount : 0) / (object.pageSize ? object.pageSize : 1))
        });
      } else {
        res.json({ message: 'Không tồn tại kết quả tìm kiếm.', success: true });
      }
    } catch (error: any) {
      res.json({ message: error.message, success: false });
    }
  }

}