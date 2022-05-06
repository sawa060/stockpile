import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ItemStatus } from '../items/item.enum';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: ItemStatus;

  @Column()
  kind: string;

  @Column()
  note: string;

  @Column()
  quantity: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
