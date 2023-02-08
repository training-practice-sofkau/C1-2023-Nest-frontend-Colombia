import { personalizado } from './personalizado.pipe'

describe('Pipe: personalizado', () => {
  it('create an instance', () => {
    let pipe = new personalizado();
    expect(pipe).toBeTruthy();
  });
});
