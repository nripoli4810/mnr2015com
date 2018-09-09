import { BabyRoutingModule } from './baby-routing.module';

describe('BabyRoutingModule', () => {
  let babyRoutingModule: BabyRoutingModule;

  beforeEach(() => {
    babyRoutingModule = new BabyRoutingModule();
  });

  it('should create an instance', () => {
    expect(babyRoutingModule).toBeTruthy();
  });
});
