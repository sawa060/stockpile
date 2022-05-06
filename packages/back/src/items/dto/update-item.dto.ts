import { Type } from 'class-transformer';
import { ValidateIf, IsEnum, IsInt, IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ItemStatus } from '../item.enum';

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  @ValidateIf((o, v) => v != null && v.length)
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  @ValidateIf((o, v) => v != null && v.length)
  kind: string;

  @IsString()
  @MaxLength(2000)
  @ValidateIf((o, v) => v != null && v.length)
  note?: string;

  @IsInt()
  @ValidateIf((o, v) => v != null && v.length)
  @Type(() => Number)
  quantity: number;

  @IsEnum(ItemStatus)
  @ValidateIf((o, v) => v != null && v.length)
  status: ItemStatus;
}
