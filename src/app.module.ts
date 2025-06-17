import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProducerModule } from './producer/producer.module';
import { ProducerMqModule } from './producer-mq/producer-mq.module';


@Module({
  imports: [ProductsModule, ProducerModule, ProducerMqModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
