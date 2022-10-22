/* hooks de setup tem sua ordem de execução 
dentro e fora de um describe 

os dois primeiros beforeEach() são executados primeiros; 
o teste fora do escopo é executado;
os dois afterEach são executados logo em seguida

os dois primeiros beforeEach() são executados novamente;
o beforeEach() dentro do escopo é executado;
o teste dentro do escopo é executado 
o afterEach() dentro do escopo é executado 
por fim os afterEach() fora do escopo são executados

Conclusão
Setups tratam os testes e os describes indiferentemente de suas
funções. 
A ordem de execução dos setups partem de um escopo mais externo
para os mais internos (dentro dos describes).
*/

beforeEach(()=>console.log('connection setup'))
beforeEach(()=>console.log('database setup'))

afterEach(()=> console.log('database teardown'))
afterEach(()=> console.log('connection teardown'))

test('test 1',()=> console.log('teste 1'))

describe('extra',()=>{
    beforeEach(()=>console.log('extra database setup'))
    afterEach(()=>console.log('extra database teardown'))

    test('test 2',()=>console.log('test 2'))
})