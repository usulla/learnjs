const Accumulator = require('./accumulator')

describe('Accumulator should', () => {
    let accumulator
    beforeEach(() => {
        accumulator = new Accumulator(1);
    })
    test('initial value is the argument of the constructor', () => {
        expect(accumulator.value).toBe(1)
    })
    
    test('read value and sum for value of object', () => {
        accumulator.read(2)
        accumulator.read(3)
        expect(accumulator.value).toBe(6)
    })
})