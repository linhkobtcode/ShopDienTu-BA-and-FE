import { injectable } from 'tsyringe';
import { MenuRepository } from '../repositories/menuRepository';

@injectable()
export class MenuService {
  constructor(private menuRepository: MenuRepository
  ) {}
  async GetMenuAll(): Promise<any> {
    return this.menuRepository.GetMenuAll();
  }

}