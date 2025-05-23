import { Catch,  ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rpcException = exception.getError();

    if (typeof rpcException === 'object' &&
        'status' in rpcException &&
        'message' in rpcException &&
        'code' in rpcException
    ) {
        const status = isNaN(+rpcException.status!) ? 500 : +rpcException.status!;
        return  response.status(status).json({
          rpcException
        });
    }

    response.status(400).json({
      statusCode: 400,
      message: rpcException
    });
  }
}