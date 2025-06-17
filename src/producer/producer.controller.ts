import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PRODUCER_KAFKA } from 'src/config/services';
import { ClientKafka } from '@nestjs/microservices';

@Controller('producer')
export class ProducerController {
  constructor(
    @Inject(PRODUCER_KAFKA)
    private readonly kafkaClient: ClientKafka,
  ) {}

  @Post()
  sendDataKafka(@Body() sendData: any) {
    this.kafkaClient.emit('save-data-example', sendData);
    return {
      message: 'Data save in kafka',
      data: sendData,
    };
  }
}
