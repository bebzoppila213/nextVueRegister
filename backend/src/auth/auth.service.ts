import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('Функция логина пользователя');
    
    // this.jwtService
    const payload = { login: user.login, sub: user.id };
   
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
