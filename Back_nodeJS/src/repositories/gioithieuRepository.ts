import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class GioiThieuRepository {
  constructor(private db: Database) { }  

// Lấy tất cả sản phẩm
  async getGioiThieuAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_GioiThieu()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 


}