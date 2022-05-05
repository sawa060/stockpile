import { Type } from 'class-transformer';
import { IsInt, IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  kind: string;

  @IsInt()
  @Type(() => Number)
  quantity: number;
}
