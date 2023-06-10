import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get All Users
  @Get('/')
  async findAll(@Res() res): Promise<UserEntity[]> {
    return res.json(await this.userService.findAll());
  }
  // Get User By id
  @Get('/:id')
  async findById(@Res() res, @Param('id') id): Promise<UserEntity> {
    return res.json(await this.userService.findById(id));
  }
  // Add user
  @Post('/')
  async create(@Res() res, @Body() createUserDto: CreateUserDto): Promise<any> {
    return res.json(await this.userService.cretae(createUserDto));
  }
  // Update User
  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Res() res,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return res.json(await this.userService.update(id, updateUserDto));
  }

  // Delete User
  @Delete('/:id')
  async delete(@Param('id') id: number, @Res() res): Promise<any> {
    return res.json(await this.userService.delete(id));
  }
}
