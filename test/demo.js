import demo from '../src/demo.js'

describe('test demo', () => {
    it('add function', () => {
        expect(demo.add(1, 2)).toEqual(3)
    })
})