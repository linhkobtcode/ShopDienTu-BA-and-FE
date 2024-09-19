import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class LienHeRepository {
  constructor(private db: Database) { }  

// Lấy tất cả sản phẩm
  async getLienHeAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_LienHe()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 


}