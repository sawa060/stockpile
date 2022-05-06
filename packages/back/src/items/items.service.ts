import { NotFoundException, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

import { Item } from '../entities/item.entity';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemRepository: ItemRepository) {}
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  findById(id: number): Item {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createItemDto: CreateItemDto) {
    return await this.itemRepository.createItem(createItemDto);
  }

  update(variables: Item): Item {
    const item = this.findById(variables.id);

    item.name = variables.name;
    item.kind = variables.kind;
    item.note = variables.note;
    item.quantity = variables.quantity;
    item.status = variables.status;

    return item;
  }

  delete(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
