import { BabyModule } from './baby.module';

describe('BabyModule', () => {
  let babyModule: BabyModule;

  beforeEach(() => {
    babyModule = new BabyModule();
  });

  it('should create an instance', () => {
    expect(babyModule).toBeTruthy();
  });
});
