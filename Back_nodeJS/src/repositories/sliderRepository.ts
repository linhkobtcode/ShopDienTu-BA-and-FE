import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class SliderRepository {
  constructor(private db: Database) { }  

// Lấy tất cả sản phẩm
  async getSlideAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_Slide()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 


}