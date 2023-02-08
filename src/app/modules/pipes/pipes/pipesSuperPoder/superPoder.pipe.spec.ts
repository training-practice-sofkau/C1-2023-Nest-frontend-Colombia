import { SuperPoder} from './superPoder.pipe';

describe('SuperPoder', () => {
  it('create an instance', () => {
    const pipe = new SuperPoder();
    expect(pipe).toBeTruthy();
  });
});
