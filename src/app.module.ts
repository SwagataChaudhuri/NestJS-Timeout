import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { GreetingsModule } from './greetings/greetings.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GreetingsModule,
    HealthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: (configService: ConfigService) => {
        const timeoutInMilliseconds = parseInt(
          configService.get<string>('TIMEOUT_IN_MILLISECONDS', '2500'),
          10,
        );
        return new TimeoutInterceptor(timeoutInMilliseconds);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
