import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class HoaDonRepository {
  constructor(private db: Database) { }   
  
  async createHoaDon(hoadon: any): Promise<any> {
    try {
        const sql = 'CALL sp_create_donhang(?, ?, ?, ?, ?, ?, ?)';
        await this.db.query(sql, [
            hoadon.HoTen,
            hoadon.DiaChi,
            hoadon.SoDienThoai,
            hoadon.MaNguoiDung,
            hoadon.TrangThai,
            hoadon.NgayGiao,
            JSON.stringify(hoadon.list_json_chitiet_hoadon)
        ]);
        return true;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

}