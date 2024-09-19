import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class SanPhamRepository {
  constructor(private db: Database) { }  


// Lấy sản phẩm theo ID
   async getSanPhamById(id: string): Promise<any> {
    try {
      const sql = 'CALL sp_getbyid_SanPham(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
// Lấy tất cả sản phẩm
  async getSanPhamAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_SanPham()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
//  Sản phẩm mới
  async getSanPhamMoi(): Promise<any> {
    try {
      const sql = 'CALL sp_lay_san_pham_moi()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
// Sản Phẩm Bán chạy
  async getSanPhamBC(): Promise<any> {
    try {
      const sql = 'CALL sp_lay_san_pham_ban_chay()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
// Tạo sản phẩm
  async createSanPham( sanpham:any): Promise<void> {
    try {
      const sql = 'CALL sp_create_SanPham(?, ?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [sanpham.tenSP, sanpham.moTa, sanpham.ngayTao, sanpham.maLoaiSanPham, sanpham.anhDaiDien, sanpham.soLuong, sanpham.donGia]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
// cập nhật 
  async updateSanPham(sanpham: any): Promise<any> {
    try {
      const sql = 'CALL sp_update_SanPham(?, ?, ?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [sanpham.MaSanPham, sanpham.tenSP, sanpham.moTa, sanpham.ngayTao, sanpham.maLoaiSanPham, sanpham.anhDaiDien, sanpham.soLuong, sanpham.donGia]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
// Tìm kiếm
  async searchSanPham(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
    try {
      const sql = 'CALL SearchDanhMuc(?, ?, ?)';
      const [results] = await this.db.query(sql, [pageIndex,pageSize,search_content]);
      return results;
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

  async deleteSanPham(MaSanPham:any): Promise<any> {
    try {
      const sql = 'CALL sp_delete_SanPham(?)';
      await this.db.query(sql, [MaSanPham]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }

}