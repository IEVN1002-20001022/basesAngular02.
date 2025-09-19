import { HeroesListPipe } from './heroes-list.pipe';

describe('HeroesListPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroesListPipe();
    expect(pipe).toBeTruthy();
  });
});
