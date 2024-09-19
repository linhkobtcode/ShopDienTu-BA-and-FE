import { injectable } from 'tsyringe';
import { DanhMucRepository } from '../repositories/danhmucRepository';

@injectable()
export class DanhMucService {
  constructor(private danhMucRepository: DanhMucRepository
  ) {}
  async getDanhMucById(id: string): Promise<any> {
    return this.danhMucRepository.getDanhMucById(id);
  }
  async getDanhMucAll(): Promise<any> {
    return this.danhMucRepository.getDanhMucAll();
  }
  async getSanPhamAll(): Promise<any> {
    return this.danhMucRepository.getSanPhamAll();
  }
  async updateDanhMuc(danhmuc: any): Promise<any> {
    return this.danhMucRepository.updateDanhMuc(danhmuc);
  }
  
  async searchDanhMuc(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
    return this.danhMucRepository.searchDanhMuc(pageIndex,pageSize,search_content);
  }

  async deleteDanhMuc(id: any): Promise<any> {
    return this.danhMucRepository.deleteDanhMuc(id);
  }
}