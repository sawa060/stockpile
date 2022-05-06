import { Type } from 'class-transformer';
import { IsInt, IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  kind: string;

  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  quantity: number;
}
