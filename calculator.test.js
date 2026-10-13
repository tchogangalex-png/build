const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calc.add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers', () => {
      expect(calc.add(5, -3)).toBe(2);
    });

    test('should add decimals', () => {
      expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });

    test('should subtract negative numbers', () => {
      expect(calc.subtract(-5, -3)).toBe(-2);
    });

    test('should handle zero', () => {
      expect(calc.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });

    test('should multiply by zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(calc.multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('should divide decimals', () => {
      expect(calc.divide(7, 2)).toBe(3.5);
    });

    test('should throw error for division by zero', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    test('should calculate power', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    test('should handle zero exponent', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    test('should handle negative exponent', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });
  });

  describe('sqrt', () => {
    test('should calculate square root', () => {
      expect(calc.sqrt(16)).toBe(4);
    });

    test('should handle zero', () => {
      expect(calc.sqrt(0)).toBe(0);
    });

    test('should throw error for negative number', () => {
      expect(() => calc.sqrt(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });

  describe('modulo', () => {
    test('should calculate modulo', () => {
      expect(calc.modulo(10, 3)).toBe(1);
    });

    test('should handle zero dividend', () => {
      expect(calc.modulo(0, 5)).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => calc.modulo(5, 0)).toThrow('Modulo by zero is not allowed');
    });
  });
});