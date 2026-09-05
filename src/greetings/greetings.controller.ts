import { Controller, Get, Logger } from '@nestjs/common';
import { ApiGatewayTimeoutResponse, ApiOkResponse, ApiTags, } from '@nestjs/swagger';
import { GreetingsService } from './greetings.service';
import { GreetingsResponseDto } from './dto/greetings-response.dto';

@ApiTags('Greetings')
@Controller('greetings')
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) { }
  private readonly logger = new Logger(this.constructor.name);

  @Get()
  @ApiOkResponse({ type: GreetingsResponseDto })
  async getGreetings(): Promise<GreetingsResponseDto> {
    this.logger.log(`Method Call: ${this.getGreetings.name} - Initiated`);
    const result = await this.greetingsService.getGreetings();
    this.logger.log(`Method Call: ${this.getGreetings.name} - Completed`);
    return result;
  }

  @Get('/delayed')
  @ApiOkResponse({ type: GreetingsResponseDto })
  @ApiGatewayTimeoutResponse({ description: 'Raised when the response delay exceeds TIMEOUT_IN_MILLISECONDS', })
  async getGreetingsDelayed(): Promise<GreetingsResponseDto> {
    this.logger.log(`Method Call: ${this.getGreetingsDelayed.name} - Initiated`,);
    const result = await this.greetingsService.getGreetingsDelayed();
    this.logger.log(`Method Call: ${this.getGreetingsDelayed.name} - Completed`,);
    return result;
  }
}
