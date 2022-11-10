import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client'


const prisma = new PrismaClient()
// This should be a real class/interface representing a user entity
// export type User = {
//   userId: number,
//   login: string,
//   name: string,
//   password: string,
//   phone: string
//   adress: string
// };

@Injectable()
export class UsersService {

  async create(login: string, password: string, phone = '', name = '', adress = ""){ 
    try{
      await prisma.user.create({data: {id: Math.round(Date.now() / 10000000), login, password, phone, name, adress}})
      return true
    }catch{
      return false
    }
    
  }

  async findOne(login: string): Promise<User | undefined> {
    return await prisma.user.findFirst({where: {login}})
  }

  async updateField(user: User, field: string, value: string): Promise<undefined | User>{
    try{
      return await prisma.user.update({where: {login: user.login}, data: {[field]: value}})
    }catch{
      return undefined
    }
    
    
  }
}