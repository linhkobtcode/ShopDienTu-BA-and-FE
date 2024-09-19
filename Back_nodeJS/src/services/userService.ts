import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/userRepository';

@injectable()
export class UserService {
  constructor(private userRepository: UserRepository
  ) {}
  
  async createUser(user: any): Promise<any> {
    return this.userRepository.createUser(user);
  }

  async authenticate(TaiKhoan: string, MatKhau: string): Promise<any> {     
    let user = await this.userRepository.GetUserByAccount(TaiKhoan, MatKhau);
    if (user) { 
      return {
        user_id: user.MaNguoiDung,
        hoten: user.HoTen,
        email: user.Email,
        ngaysinh: user.NgaySinh,
        diachi: user.DiaChi,
        vaitro: user.VaiTro,
        taikhoan: user.TaiKhoan,
        anhdaidien: user.AnhDaiDien
      };
    }
    return null;
  }
}