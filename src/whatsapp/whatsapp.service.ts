import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class WhatsappService {
  constructor(@InjectQueue('whatsapp_Queue') private whatsapp_queue: Queue) { }

  async redisOperation() {
    try {
      const uuid = uuidv4();
      const data = `sachin-${uuid}`;
      const result = await this.whatsapp_queue.add(`whatsapp-${uuid}`, data);
      return result;
    } catch (error) {
      console.log('Error in redisOperation:', error);
      return ({
        status: HttpStatus.CONFLICT,
        error: 'Failed to add job to the queue',
        message: error.message,
      })
    }
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
