import {describe,expect,test} from '@jest/globals'
import { multiple } from './multiple'
describe('modulo da multiplicação',()=>{
    test('espero que 2*10 seja 20',()=>{
        expect(multiple(2,10)).toEqual(20)
    })
})