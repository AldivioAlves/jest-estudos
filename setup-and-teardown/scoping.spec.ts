import {clearCityDatabase,database,initializeCitydatabase} from './mockDatabase'
/* describe pode ser utilizado como forma de agrupar testes
onde, por exemplo, a execução de setups de um grupo não interfere
nos setups de outros. 
*/

describe('tests with database loaded',()=>{
    beforeAll(()=>{
        initializeCitydatabase()
    })
    test('database length must be more than zero',()=>{
        expect(database.length).toBeGreaterThan(0)
    })
})

describe('test with database closed',()=>{
    beforeAll(()=>{
        clearCityDatabase()
    })
    test('database must be empty',()=>{
        expect(database.length).toBe(0)
    })
})

