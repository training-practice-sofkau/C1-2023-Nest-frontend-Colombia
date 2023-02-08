import { NameRefactorPipe } from './name-refactor.pipe';

describe('NameRefactorPipe', () => {
  it('create an instance', () => {
    const pipe = new NameRefactorPipe();
    expect(pipe).toBeTruthy();
  });
});
