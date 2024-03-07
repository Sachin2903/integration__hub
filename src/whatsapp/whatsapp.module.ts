import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { WhatsappController } from './whatsapp.controller';
// import { RedisModule } from '@nestjs-modules/ioredis';
@Module({
  
  controllers: [WhatsappController],
  providers: [WhatsappService],
})
export class WhatsappModule {}
