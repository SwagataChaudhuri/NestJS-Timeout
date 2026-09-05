import { ApiProperty } from '@nestjs/swagger';

export class GreetingsResponseDto {
  @ApiProperty({ example: 'Welcome User !! Greetings from NestJS !!' })
  message: string;
}
