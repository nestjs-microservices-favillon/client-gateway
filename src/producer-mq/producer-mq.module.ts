import { Module } from '@nestjs/common';
import { ProducerMqController } from './producer-mq.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCER_RABBITMQ } from 'src/config/services';

@Module({
  controllers: [ProducerMqController],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCER_RABBITMQ,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'save-data-example-rmq',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [],
})
export class ProducerMqModule {}
