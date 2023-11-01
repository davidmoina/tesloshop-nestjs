import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'product_images' })
export class ProductImage {
  @ApiProperty({
    example: '16029be8-21c5-4ef3-9f8e-3987364c9685',
    description: 'Image ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'http://...image-1.jpg',
    description: 'Image url',
    uniqueItems: true,
  })
  @Column('text')
  url: string;

  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
