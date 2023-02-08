import { personalizado } from './personalizado.pipe'

describe('Pipe: Pipepersonalizadoe', () => {
  it('create an instance', () => {
    let pipe = new personalizado();
    expect(pipe).toBeTruthy();
  });
});
