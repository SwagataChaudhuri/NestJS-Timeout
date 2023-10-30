import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GreetingsService {
  private readonly logger = new Logger(this.constructor.name);

  async getGreetings(): Promise<any> {
    return { "message": "Welcome User !! Greetings from NestJS !!" };
  }

  async getGreetingsDelayed(): Promise<any> {
    const delay : number = await this.getDelayInMilliseconds();
    this.logger.log(`Delaying response by ${Math.floor(delay / 1000)} secs`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ "message": `Welcome User !! Greetings from NestJS with ${Math.floor(delay / 1000)} secs delay !!` });
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
