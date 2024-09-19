import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class DanhMucRepository {
  constructor(private db: Database) { }  
   async getDanhMucById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetDanhMucById(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getDanhMucAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_LoaiSanPham()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  // sanpham
  async getSanPhamAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_SanPham()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateDanhMuc(danhmuc: any): Promise<any> {
    try {
      const sql = 'CALL UpdateDanhMuc(?, ?)';
      await this.db.query(sql, [danhmuc.danh_muc_id, danhmuc.ten_danh_muc]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }

  async searchDanhMuc(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
    try {
      const sql = 'CALL SearchDanhMuc(?, ?, ?)';
      const [results] = await this.db.query(sql, [pageIndex,pageSize,search_content]);
      return results;
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

  async deleteDanhMuc(id:any): Promise<any> {
    try {
      const sql = 'CALL DeleteDanhMuc(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }

}