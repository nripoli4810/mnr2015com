import { CallbackPipe } from './callback.pipe';
import { Tile } from '../models/tile';

describe('CallbackPipe', () => {
  it('create an instance', () => {
    const pipe = new CallbackPipe();
    expect(pipe).toBeTruthy();
  });
});

const arrayToFilter: Tile[] = [
  {
    id: 1,
    avatar: '',
    content: '',
    href: '',
    subtitle: '',
    title: '',
    featured: true,
    hidden: false,
    img: ''
  },
  {
    id: 2,
    avatar: '',
    content: '',
    href: '',
    subtitle: '',
    title: '',
    featured: false,
    hidden: false,
    img: ''
  }
];

describe('CallbackPipe', () => {
  it('filters tile by featured propertyng te', () => {
    const pipe = new CallbackPipe();
    const result = pipe.transform(arrayToFilter,
      (t: Tile) => {
        return t.featured;
    });
    expect(result).toContain(1);
  });
});

