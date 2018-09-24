import { BookFilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
