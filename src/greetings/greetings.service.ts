import { Injectable, Logger } from '@nestjs/common';
import { GreetingsResponseDto } from './dto/greetings-response.dto';

@Injectable()
export class GreetingsService {
  private readonly logger = new Logger(this.constructor.name);

  async getGreetings(): Promise<GreetingsResponseDto> {
    return { message: 'Welcome User !! Greetings from NestJS !!' };
  }

  async getGreetingsDelayed(): Promise<GreetingsResponseDto> {
    const delay: number = await this.getDelayInMilliseconds();
    const delayInSeconds = Math.floor(delay / 1000);
    this.logger.log(`Delaying response by ${delayInSeconds} secs`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: `Welcome User !! Greetings from NestJS with ${delayInSeconds} secs delay !!`,
        });
      }, delay);
    });
  }

  private async getDelayInMilliseconds(): Promise<number> {
    const min = 1;
    const max = 5;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber * 1000;
  }
}
