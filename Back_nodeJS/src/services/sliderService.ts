import { injectable } from 'tsyringe';
import { SliderRepository} from '../repositories/sliderRepository';

@injectable()
export class SliderService {
  constructor(private sliderRepository: SliderRepository
  ) {}
  async getslideAll(): Promise<any> {
    return this.sliderRepository.getSlideAll();
  }
}