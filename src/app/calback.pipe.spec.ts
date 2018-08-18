import { CallbackPipe } from './callback.pipe';

describe('FeaturedToVisiblePipePipe', () => {
  it('create an instance', () => {
    const pipe = new CallbackPipe();
    expect(pipe).toBeTruthy();
  });
});
