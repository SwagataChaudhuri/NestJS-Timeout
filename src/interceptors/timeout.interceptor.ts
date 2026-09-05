import {
  CallHandler,
  ExecutionContext,
  GatewayTimeoutException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(private readonly timeoutInMillis: number) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(this.timeoutInMillis),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          throw new GatewayTimeoutException({
            statusCode: HttpStatus.GATEWAY_TIMEOUT,
            message: 'Gateway timeout has occurred',
            error: 'Gateway Timeout',
            errorCode: 'GATEWAY_TIMEOUT',
          });
        }
        return throwError(() => err);
      }),
    );
  }
}
