import { fetchData } from "./functions";
import {fetchDataResolveReject} from './functions'
test('the data is peanut butter (asysn/await)',async()=>{
    const data:string = await fetchData(); // usando o async/await para atribuir o resultado da função em uma variavel
    expect(data).toBe('peanut butter'); 

})

test('the fetch fails with an error', async()=>{ // teste falha visto que não tem asserção
    expect.assertions(1)
    try{
        await fetchData()
    }catch(e){
        expect(e).toMatch('error')
    }
})

test('catch error match with "error"', async()=>{ //teste passa pois o retorno de erro é o esperado.
    expect.assertions(1)
    try{
        await fetchDataResolveReject()
    }catch(e){
        expect(e).toMatch('error')
    }
})
