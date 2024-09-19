import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { MenuService } from '../services/menuService';

@injectable()
export class MenuController {
  constructor(private menuService: MenuService
  ) { }

  async GetMenuAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.menuService.GetMenuAll();
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