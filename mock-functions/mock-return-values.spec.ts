const myMock = jest.fn()

console.log(myMock())
//Injetando valores na função durante o teste
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
console.log(myMock(),myMock(),myMock(),myMock())


const filterTestFn = jest.fn()
// A função nessa execução retorna true e false 
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

// a função retorna o  ultimo valor do método filter
const result = [11,12].filter(num=>filterTestFn(num))
console.log(result)

// Analisando as duas chamadas da função (2x visto que no array tinha dois elementos (filter é uma função de iteração))
// Foi sobrescrito os retornos da chamada a função filterTestFn visto que os logs não estão retornando os testes true e false; 
console.log(filterTestFn.mock.calls[0][0])
console.log(filterTestFn.mock.calls[1][0])
test('',()=>{
})