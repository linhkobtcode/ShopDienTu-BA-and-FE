import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { HoaDonService } from '../services/hoadonService';

@injectable()
export class HoaDonController {
  constructor(private hoaDonService: HoaDonService
  ) { }

  
  async createHoaDon(req: Request, res: Response): Promise<void> {
    try {
        let hoadon = {
            HoTen: req.body.HoTen,
            DiaChi: req.body.DiaChi,
            SoDienThoai: req.body.SoDienThoai,
            MaNguoiDung: req.body.MaNguoiDung,
            TrangThai: req.body.TrangThai,
            NgayGiao: req.body.NgayGiao,
            list_json_chitiet_hoadon: req.body.list_json_chitiet_hoadon
        };
        
        const results = await this.hoaDonService.createHoaDon(hoadon);
        res.json({ message: 'Đã tạo đơn hàng thành công', results }); 
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

}