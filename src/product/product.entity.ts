import {  Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from 'typeorm';
import { ApiProperty} from '@nestjs/swagger';
import {IsString, IsInt, IsNotEmpty } from 'class-validator';
@Entity()
export class  Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({description: 'product name', required : true})
  @IsString()
  @IsNotEmpty()
 
  product_name: string;

  @Column()
  @ApiProperty({description: 'product description', required : true})
  @IsString()
  @IsNotEmpty()
  description: string;
  
  @Column()
  @ApiProperty({description: 'product language name 1', required : true})
  @IsString()
  @IsNotEmpty()
  language1: string;

  @Column()
  @ApiProperty({description: 'product language name 2', required : true})
  @IsString()
  @IsNotEmpty()
  language2: string;

  @Column()
  @ApiProperty({description: 'product language name 3', required : true})
  @IsString()
  @IsNotEmpty()
  language3: string;

  @Column()
  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date;
}
