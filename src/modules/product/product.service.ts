import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.findAll();
  }

  async findById(id: number): Promise<ProductEntity> {
    return await this.productRepository.findById(id);
  }

  async create(createProductDto: CreateProductDto): Promise<any> {
    return await this.productRepository.save(createProductDto);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    return await this.productRepository.update(
      {
        id: id,
      },
      updateProductDto,
    );
  }

  async delete(id: number): Promise<any> {
    return await this.productRepository.delete(id);
  }
}
