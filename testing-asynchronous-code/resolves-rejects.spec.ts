import { fetchData, fetchDataResolveReject } from "./functions";

test('the fetch fails with an error',async()=>{ // teste falha visto que o resultado não é 'error'
    await expect(fetchData()).rejects.toBe('error');  
})

test('the fetch fails with an error',async()=>{ // teste passa visto que o resultado é 'error
  await expect(fetchDataResolveReject()).rejects.toBe('error');  
})


test('the data is peanut butter (with resolves)',async()=>{
  await expect(fetchData()).resolves.toBe('peanut butter'); // usando resolves para testar o retorno da função assincrona
})

test('the fetch fails with an error',()=>{
  expect.assertions(1)
  return fetchData().catch(e=>expect(e).toMatch('error')) //testando apenas a exceção da promisse 
})