import {database,clearCityDatabase,initializeCitydatabase} from './mockDatabase'

afterEach(()=>{ // depois de testar cada um
    clearCityDatabase()
})
beforeEach(()=>{ // antes de testar cada um
    initializeCitydatabase();
})

/*beforeAll() e afterAll() podem ser usados para 
uma configuração inicial que vale para todos os testes
*/


const cityExist = (city:string):boolean=>{
    let result:boolean = false;
    database.forEach((value:string) => {
        if(value===city){
            result = true
        }
    });
    return result
}

test('expect database length > 0', ()=>{
    expect(database.length).toBeGreaterThan(0)
})

test('expect city exist',()=>{
    expect(cityExist('Franca')).toBeTruthy()
})

test("expect city doesn't exist",()=>{
    expect(cityExist('Rio de Janeiro')).toBeFalsy()
})

