import { ItemStatus } from './item.enum';

export interface Item {
  id: number;
  name: string;
  status: ItemStatus;
  kind?: string;
  note?: string;
  quantity?: number;
}
