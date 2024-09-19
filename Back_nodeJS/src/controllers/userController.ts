import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { UserService } from '../services/userService';
import { generateToken } from '../config/jwt';

@injectable()
export class UserController {
  constructor(private userService: UserService
  ) { }

  // async createUser(req: Request, res: Response): Promise<void> {
  //   try {
  //     let user = req.body as { hoten: string, username: string, password: string, anh: string };
  //     if (Array.isArray(req.files)) {
  //       user.anh = req.files[0].path;
  //     }
  //     const results = await this.userService.createUser(user);
  //     res.json({ message: 'Đã thêm người dùng thành công.' });
  //   } catch (error: any) {
  //     res.json({ message: error.message });
  //   }
  // }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    try {
      await this.userService.createUser(user);
      res.status(201).json({ message: 'Tạo thành công' });
    } catch (error: any) {
      res.status(500).json({ message:'Tạo không thành công' });
    }
  }

  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { TaiKhoan, MatKhau } = req.body;
      const user = await this.userService.authenticate(TaiKhoan, MatKhau);
      if (user) {
        const token = generateToken(user);
        user.token = token;
        res.json(user);
      } else {
        res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

}