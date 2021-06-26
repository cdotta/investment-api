import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Investment {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  destination: string;

  @Field()
  @Column({ nullable: false })
  amount: number;

  @Field()
  @Column({ default: 0, nullable: false })
  externalFees: number;

  @Field()
  @Column({ default: 0, nullable: false })
  internalFees: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
