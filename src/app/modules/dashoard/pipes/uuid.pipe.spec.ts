import { UuidPipe } from './uuid.pipe';

describe('UuidPipe', () => {
  it('create an instance', () => {
    const pipe = new UuidPipe();
    expect(pipe).toBeTruthy();
  });
});
