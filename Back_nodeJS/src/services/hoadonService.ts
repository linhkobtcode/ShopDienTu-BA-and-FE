import { injectable } from 'tsyringe';
import { HoaDonRepository } from '../repositories/hoadonRepository';

@injectable()
export class HoaDonService {
  constructor(private hoaDonRepository: HoaDonRepository
  ) {}
  async createHoaDon(hoadon: any): Promise<any> {
    return this.hoaDonRepository.createHoaDon(hoadon);
  }
}