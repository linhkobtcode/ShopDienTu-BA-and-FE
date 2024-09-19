import { injectable } from 'tsyringe';
import { GioiThieuRepository} from '../repositories/gioithieuRepository';

@injectable()
export class GioiThieuService {
  constructor(private gioiThieuRepository: GioiThieuRepository
  ) {}
  async getGioiThieuAll(): Promise<any> {
    return this.gioiThieuRepository.getGioiThieuAll();
  }
}