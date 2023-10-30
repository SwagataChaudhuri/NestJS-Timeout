import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsController } from '../greetings.controller';
import { GreetingsService } from '../greetings.service';

const response = { "message": "Welcome User !! Greetings from NestJS !!" }

describe('GreetingsController', () => {
  let controller: GreetingsController;
  let spyservice: GreetingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreetingsController],
      providers: [GreetingsService],
    }).compile();

    controller = module.get<GreetingsController>(GreetingsController);
    spyservice = module.get<GreetingsService>(GreetingsService);
    spyservice.getGreetings = jest.fn().mockResolvedValue(response);
    spyservice.getGreetingsDelayed = jest.fn().mockResolvedValue(response);
  });

  it('GreetingsController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GreetingsController - getGreetings() should be defined', () => {
    expect(controller.getGreetings).toBeDefined();
  });

  it('GreetingsController - getGreetings() should return greetings message', async () => {
    expect(await controller.getGreetings()).toEqual(response);
  });

  it('GreetingsController - getGreetingsDelayed() should be defined', () => {
    expect(controller.getGreetingsDelayed).toBeDefined();
  });

  it('GreetingsController - getGreetingsDelayed() should return greetings message with delay', async () => {
    expect(await controller.getGreetingsDelayed()).toEqual(response);
  });

});
