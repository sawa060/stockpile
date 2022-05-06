import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import * as ormconfig from '../ormconfig';

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot(ormconfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
