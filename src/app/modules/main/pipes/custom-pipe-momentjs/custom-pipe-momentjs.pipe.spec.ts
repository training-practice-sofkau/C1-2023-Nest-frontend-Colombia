import { CustomPipeMomentjsPipe } from './custom-pipe-momentjs.pipe';

describe('CustomPipeMomentjsPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipeMomentjsPipe();
    expect(pipe).toBeTruthy();
  });
});
