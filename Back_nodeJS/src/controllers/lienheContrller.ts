import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { LienHeService } from '../services/lienheService';

@injectable()
export class LienHeController {
  constructor(private lienHeService: LienHeService
  ) { }

  async getLienHeAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.lienHeService.getLienHeAll();
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