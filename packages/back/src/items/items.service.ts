import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  findById(id: number): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item): Item {
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
