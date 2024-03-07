import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { RedisModule } from '@nestjs-modules/ioredis';
@Module({
  imports: [
    WhatsappModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
