import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import * as ormConfig from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
