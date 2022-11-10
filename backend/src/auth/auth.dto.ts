import { IsString, IsInt, IsEmail, MinLength } from 'class-validator';

export class UpdateDto {
    @MinLength(3) @IsString() readonly  field: string
    @MinLength(3) @IsString() readonly  value: string
}

export class RegisterDto {
    @IsEmail() readonly  login: string
    @IsString() readonly  password: string
    @IsString() readonly  phone: string
    @IsString() readonly  name: string
    @IsString() readonly  adress: string
}

export class AuthDto{
    @IsEmail() readonly  login: string
    @IsString() readonly  password: string
}