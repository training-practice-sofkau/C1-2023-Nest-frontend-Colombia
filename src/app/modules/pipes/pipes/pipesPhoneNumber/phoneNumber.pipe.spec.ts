import { phoneNumber } from './phoneNumber.pipe';

describe('phonePipe', () => {
  it('create an instance', () => {
    const pipe = new phoneNumber();
    expect(pipe).toBeTruthy();
  });
});
