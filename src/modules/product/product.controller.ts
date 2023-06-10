import {
  Controller,
  Get,
  Res,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('/api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async findAll(@Res() res): Promise<ProductEntity> {
    return res.json(await this.productService.findAll());
  }

  @Get('/:id')
  async findById(@Res() res, @Param('id') id): Promise<ProductEntity> {
    return res.json(await this.productService.findById(id));
  }

  @Post('/')
  async create(
    @Res() res,
    @Body() createProductDto: CreateProductDto,
  ): Promise<any> {
    return res.json(await this.productService.create(createProductDto));
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Res() res,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<any> {
    return res.json(await this.productService.update(id, updateProductDto));
  }

  @Delete('/:id')
  async delete(@Param('id') id: number, @Res() res): Promise<any> {
    return res.json(await this.productService.delete(id));
  }
}
