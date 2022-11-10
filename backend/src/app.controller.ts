import { Controller, Request, Post, UseGuards, Get, Body, UsePipes, Response } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';
import { AuthDto, RegisterDto, UpdateDto } from './auth/auth.dto'
import { ValidationPipe } from './common/validation.pipe';

@Controller()
export class AppController {
  constructor(private authService: AuthService, 
    private userService: UsersService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() AuthDto: AuthDto) {
    console.log("функция обработки запроса");
    return this.authService.login(AuthDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return await this.userService.findOne(req.user.login);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @Post('update')
  updateUser(@Response() res, @Request() req,  @Body() UpdateDto: UpdateDto) {
    const user = this.userService.updateField(req.user, UpdateDto.field, UpdateDto.value)
    if(user){
      return res.status(202).json({message: 'Пользователь обновлён', ok: true,});
    }
    return res.status(403).json({message: 'Не удалось обновить поле', ok: false});
  }

  // @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Response() res, @Request() req,  @Body() RegisterDto: RegisterDto) {
    const createRes = await this.userService.create(RegisterDto.login, RegisterDto.password, RegisterDto.phone, RegisterDto.name, RegisterDto.adress)
    
    if(createRes){
      return res.status(201).json({message: 'Пользователь успешно создан', ok: true, data: RegisterDto});
    }
    return res.status(401).json({message: 'Не удалось создать объект', ok: false});
  }

  @Post('test')
  async test() {
    return 'req.user';
  }
}
