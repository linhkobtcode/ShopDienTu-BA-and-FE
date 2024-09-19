import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class MenuRepository {
  constructor(private db: Database) { }  
    
  async GetMenuAll(): Promise<any> {
    try {
      const sql = 'CALL sp_getall_Menu()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  }  

  
}