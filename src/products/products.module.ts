import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { PRODUCT_SERVICE } from 'src/config/services';
import { envs } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productsMSHost,
          port: envs.productsMSPort,
        },
      },
    ]),
  ],
})
export class ProductsModule {
  constructor() {
    console.log('products module init');
    console.log({ envs });
  }
}
