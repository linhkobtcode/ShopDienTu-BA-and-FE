import { injectable } from 'tsyringe';
import { SanPhamRepository} from '../repositories/sanphamRepository';

@injectable()
export class SanPhamService {
  constructor(private sanPhamRepository: SanPhamRepository
  ) {}
  async getSanPhamById(id: string): Promise<any> {
    return this.sanPhamRepository.getSanPhamById(id);
  }
  async getSanPhamAll(): Promise<any> {
    return this.sanPhamRepository.getSanPhamAll();
  }
  async getSanPhamMoi(): Promise<any> {
    return this.sanPhamRepository.getSanPhamMoi();
  }
  async getSanPhamBC(): Promise<any> {
    return this.sanPhamRepository.getSanPhamBC();
  }
  async createSanPham(sanpham: any): Promise<any> {
    return this.sanPhamRepository.createSanPham(sanpham);
  }
  async updateSanPham(sanpham: any): Promise<any> {
    return this.sanPhamRepository.updateSanPham(sanpham);
  }
  
  async searchSanPham(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
    return this.sanPhamRepository.searchSanPham(pageIndex,pageSize,search_content);
  }
  async deleteSanPham(MaSanPham: any): Promise<any> {
    return this.sanPhamRepository.deleteSanPham(MaSanPham);
  }
}