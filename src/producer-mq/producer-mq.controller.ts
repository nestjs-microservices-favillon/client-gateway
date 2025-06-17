import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientMqtt, ClientRMQ } from '@nestjs/microservices';
import { PRODUCER_RABBITMQ } from 'src/config/services';

@Controller('producer-mq')
export class ProducerMqController {
  constructor(
    @Inject(PRODUCER_RABBITMQ)
    private readonly rabbitMq: ClientRMQ,
  ) {}

  @Post()
  sendDataMq(@Body() sendData: any) {
    this.rabbitMq.emit('save-data-example-rmq', sendData);
    return {
      message: 'Data save in rabbitMq',
      data: sendData,
    };
  }
}
