import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import {  ProductService } from './product.service';
import {  Product } from './product.entity';

@Controller('product')
export class  ProductController {
  constructor(private readonly usersService:  ProductService) {}

  @Get()
  async findAll(): Promise< Product[]> {
    return this.usersService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise< Product> {
    return this.usersService.findOne(id);
  }

  @Get('search')
  async findByName(@Query('product_name') product_name: string): Promise<Product[]> {
    return this.usersService.findByName(product_name);
  }

  @Post()
  async create(@Body()  product:  Product): Promise< Product> {
    return this.usersService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body()  product: Partial< Product>): Promise<void> {
    return this.usersService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.usersService.delete(id);
  }
}
