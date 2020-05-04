const Calculator = require('./constructor')

describe('Calculator should', () => {
    let calculator
    beforeEach(() => {
        const calculator = new Calculator()
        calculator.read(2,3)
    })
    test('read and save 2 value', () => {
        expect(calculator.x).toBe(2)
        expect(calculator.y).toBe(3)
    })
    test('return sum values ', () => {
        expect(calculator.sum()).toBe(5)
    })
    test('return mult values ', () => {
        expect(calculator.mult()).toBe(6)
    })
})