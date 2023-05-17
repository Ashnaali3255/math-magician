import operate from '../logic/operate';

describe('test for operate file', () => {
  it(' adding two numbers', () => {
    expect(operate(5, 2, '+')).toBe('7');
  });

  it('subtracting two numbers', () => {
    expect(operate(3, 5, '-')).toBe('-2');
  });

  it('multiplying two numbers', () => {
    expect(operate(10, 2, 'x')).toBe('20');
  });

  it('dividing two numbers', () => {
    expect(operate(10, 50, '÷')).toBe('0.2');
  });

  it('finding the modulo of two numbers', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });

  it('throw an error if try to divide by zero', () => {
    expect(operate(100, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('throw an error if the operation is modulo by zero', () => {
    expect(operate(100, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throw an error if the operation is unknown', () => {
    expect(() => operate(6, 2, '_')).toThrow('Unknown operation \'_\'');
  });
});