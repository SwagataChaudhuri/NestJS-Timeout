import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GreetingsService } from './greetings.service';

@ApiTags('Greetings')
@Controller('greetings')
export class GreetingsController {
    constructor(private readonly greetingsService: GreetingsService) { }
    private readonly logger = new Logger(this.constructor.name);

    @Get()
    async getGreetings(): Promise<any> {
        this.logger.log(`Method Call: ${this.getGreetings.name} - Initiated`);
        const result = await this.greetingsService.getGreetings();
        this.logger.log(`Method Call: ${this.getGreetings.name} - Completed`);
        return result;
    }

    @Get('/delayed')
    async getGreetingsDelayed(): Promise<any> {
        this.logger.log(`Method Call: ${this.getGreetingsDelayed.name} - Initiated`);
        const result = await this.greetingsService.getGreetingsDelayed();
        this.logger.log(`Method Call: ${this.getGreetingsDelayed.name} - Completed`);
        return result;
    }
}
