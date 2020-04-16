import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User> ){}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.userRepository.find({
      select: ["name", "age", "email"],
      where: [{"id": _id}]
    });
  }

  async addUser(user:User) {
    return await this.userRepository.save(user);
  }

  async updateUser(user: User) {
    return await this.userRepository.save(user);
  }

  async deleteUser(user: User) {
    return await this.userRepository.delete(user);
  }
 
}
