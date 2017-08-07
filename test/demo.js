import demo from '../src/demo.js'

describe('test demo', () => {
    it('add function', () => {
        expect(demo.add(1, 2)).toEqual(3)
    })
    it('cut function', () => {
        expect(demo.cut(12345678.02)).toEqual('12,345,678.02')
    })
})
