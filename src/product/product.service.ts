import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class  ProductService {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository< Product>,
  ) {}

  async findAll(): Promise< Product[]> {
    return this.ProductRepository.find();
  }

  async findOne(id: number): Promise< Product> {
    return this.ProductRepository.findOne({ where: { id } });
  }


  async findByName(product_name: string): Promise<Product[]> {
    return this.ProductRepository.find({
      where: [
        { product_name: Like(`%${product_name}%`) }, 
      ],
    });
  }

  async create(product:  Product): Promise< Product> {
    return this.ProductRepository.save(product);
  }

  async update(id: number, product: Partial< Product>): Promise<void> {
    await this.ProductRepository.update(id, product);
  }

  async delete(id: number): Promise<void> {
    await this.ProductRepository.delete(id);
  }
}
