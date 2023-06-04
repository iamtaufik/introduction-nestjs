import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {
    super(
      userEntityRepository.target,
      userEntityRepository.manager,
      userEntityRepository.queryRunner,
    );
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userEntityRepository.find();
  }

  async findById(id: number): Promise<UserEntity> {
    return this.userEntityRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
