import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsService } from '../greetings.service';

const response1 = { "message": "Welcome User !! Greetings from NestJS !!" }
const response2 = { "message": "Welcome User !! Greetings from NestJS with 1 secs delay !!" }

describe('GreetingsService', () => {
  let service: GreetingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreetingsService],
    }).compile();

    service = module.get<GreetingsService>(GreetingsService);
  });

  it('GreetingsService - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('GreetingsService - getGreetings() should be defined', () => {
    expect(service.getGreetings).toBeDefined();
  });

  it('GreetingsService - getGreetings() should return greetings message', async () => {
    expect(await service.getGreetings()).toEqual(response1);
  });

  it('GreetingsService - getGreetingsDelayed() should be defined', () => {
    expect(service.getGreetingsDelayed).toBeDefined();
  });

  it('GreetingsService - getGreetings() should return greetings message with configured delay', async () => {
    const spyGetDelayInMilliseconds = jest.spyOn(service as any, 'getDelayInMilliseconds').mockReturnValue(1000);
    const response = await service.getGreetingsDelayed();
    expect(spyGetDelayInMilliseconds).toHaveBeenCalledTimes(1);
    expect(response).toEqual(response2);
  });

  it('GreetingsService - getGreetings() should return greetings message with random delay', async () => {
    const response = await service.getGreetingsDelayed();
    expect(response).toBeDefined();
  });
});
