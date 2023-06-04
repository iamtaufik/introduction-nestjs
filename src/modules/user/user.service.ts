import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.userRepository.findById(id);
  }

  async cretae(createUserDto: CreateUserDto): Promise<any> {
    return await this.userRepository.save(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.userRepository.update(
      {
        id: id,
      },
      updateUserDto,
    );
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
