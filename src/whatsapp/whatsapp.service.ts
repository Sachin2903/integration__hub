import { Injectable } from '@nestjs/common';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WhatsappService {
  private readonly queueName: string;
  private readonly redisClient: Redis;

 
  constructor() {
    this.queueName = 'whatsapp_Queue';
    this.redisClient = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
  }

  async redisOperation() {
    const uuid = uuidv4();
    const data = `sachin-${uuid}`;
    const result = await this.redisClient.rpush(this.queueName, JSON.stringify(data));
    return result;
  }

  create(createWhatsappDto: CreateWhatsappDto) {
    return 'This action adds a new whatsapp';
  }

  findAll() {
    return `This action returns all whatsapp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whatsapp`;
  }

  update(id: number, updateWhatsappDto: UpdateWhatsappDto) {
    return `This action updates a #${id} whatsapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsapp`;
  }
}
