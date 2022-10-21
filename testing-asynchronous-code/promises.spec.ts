import { fetchData } from "./functions";

test('the data is peanut butter',()=>{
    return fetchData().then(data=>{ // usando o then para recuperar e testar o resultado da função asyncrona
        expect(data).toBe('peanut butter')
    })
})
