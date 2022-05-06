import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateIf, IsEnum, IsInt, IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ItemStatus } from '../item.enum';

export class UpdateItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ValidateIf((o, v) => v != null && v.length)
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @ValidateIf((o, v) => v != null && v.length)
  kind: string;

  @ApiProperty()
  @IsString()
  @MaxLength(2000)
  @ValidateIf((o, v) => v != null && v.length)
  note?: string;

  @ApiProperty()
  @IsInt()
  @ValidateIf((o, v) => v != null && v.length)
  @Type(() => Number)
  quantity: number;

  @ApiProperty()
  @IsEnum(ItemStatus)
  @ValidateIf((o, v) => v != null && v.length)
  status: ItemStatus;
}
