import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { GioiThieuService } from '../services/gioithieuService';

@injectable()
export class GioiThieuController {
  constructor(private gioiThieuService: GioiThieuService
  ) { }

  async getGioiThieuAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.gioiThieuService.getGioiThieuAll();
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

}