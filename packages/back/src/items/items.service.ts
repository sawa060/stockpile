import { NotFoundException, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

import { Item } from '../entities/item.entity';
import { ItemRepository } from './item.repository';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly itemRepository: ItemRepository) {}
  private items: Item[] = [];
  async findAll() {
    return await this.itemRepository.find();
  }

  async findById(id: number) {
    const found = await this.itemRepository.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createItemDto: CreateItemDto) {
    return await this.itemRepository.createItem(createItemDto);
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    await this.itemRepository.update(id, updateItemDto);
    return await this.itemRepository.findOne(id);
  }

  async delete(id: number) {
    return await this.itemRepository.delete({ id });
  }
}
