import { Item } from 'src/entities/item.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item.enum';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  async createItem(createItemDto: CreateItemDto) {
    const { name, kind, quantity } = createItemDto;
    const item = this.create({
      name,
      kind,
      quantity,
      status: ItemStatus.USING,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(item);

    return item;
  }
}
