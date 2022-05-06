import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item.enum';
import { Item } from '../entities/item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.itemsService.create(createItemDto);
  }

  @Patch()
  update(
    @Body('id') id: number,
    @Body('name') name: string,
    @Body('kind') kind: string,
    @Body('note') note: string,
    @Body('quantity') quantity: number,
    @Body('status') status: ItemStatus,
  ): Item {
    const item: Item = {
      id,
      name,
      status,
      quantity,
      kind,
      note,
    };
    return this.itemsService.update(item);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.itemsService.delete(id);
  }
}
