import { BooleanToStringPipe } from './BooleanToString.pipe';

describe('BooleanToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
