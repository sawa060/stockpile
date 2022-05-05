import { NotFoundException, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item.enum';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
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

  create(createItemDto: CreateItemDto): Item {
    const item = { ...createItemDto, status: ItemStatus.USING };
    this.items.push(item);
    return item;
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
