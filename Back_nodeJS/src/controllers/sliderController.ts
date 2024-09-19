import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { SliderService } from '../services/sliderService';

@injectable()
export class SliderController {
  constructor(private slideService: SliderService
  ) { }

  async getSlideAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.slideService.getslideAll();
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