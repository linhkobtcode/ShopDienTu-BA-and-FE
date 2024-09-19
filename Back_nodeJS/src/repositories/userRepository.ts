import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class UserRepository {
  constructor(private db: Database) { }  

  
  async createUser(user: any): Promise<any> {
    try {
      const sql = 'CALL sp_create_NguoiDung(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [user.taiKhoan, user.matKhau, user.email, user.hoTen, user.ngaySinh, user.diaChi, user.soDienThoai, user.gioiTinh, user.anhDaiDien, user.vaiTro]);
      return true;
    } catch (error: any) {
      console.error('Error creating user:', error);
      throw new Error( error.message);
    }
  } 

  async GetUserByAccount(TaiKhoan: string, MatKhau: string): Promise<any> {
    try {
      const sql = 'CALL sp_dangnhap_NguoiDung(?,?)';
      const [results] = await this.db.query(sql, [TaiKhoan,MatKhau]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
}