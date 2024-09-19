import { injectable } from 'tsyringe';
import { LienHeRepository} from '../repositories/lienheRepository';

@injectable()
export class LienHeService {
  constructor(private lienHeRepository: LienHeRepository
  ) {}
  async getLienHeAll(): Promise<any> {
    return this.lienHeRepository.getLienHeAll();
  }
}