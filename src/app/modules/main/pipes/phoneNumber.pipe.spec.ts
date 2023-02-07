import { PhoneNumberPipe } from './phoneNumber.pipe';


describe('PhoneNumbernPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
