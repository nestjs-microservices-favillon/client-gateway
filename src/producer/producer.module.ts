import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCER_KAFKA } from 'src/config/services';

@Module({
  controllers: [ProducerController],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCER_KAFKA,
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  providers: [],
})
export class ProducerModule {}
