import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productEntityRepository: Repository<ProductEntity>,
  ) {
    super(
      productEntityRepository.target,
      productEntityRepository.manager,
      productEntityRepository.queryRunner,
    );
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productEntityRepository.find();
  }

  async findById(id: number): Promise<ProductEntity> {
    return await this.productEntityRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
