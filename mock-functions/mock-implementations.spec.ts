jest.mock('./foo',()=>jest.fn())
const foo:any = require('./foo')

// a implementação de foo mudou totalmente!
foo.mockImplementation(()=>42)

test('should foo return 42', ()=>{
    foo()
})

// mockImplementationOnce pode ser usado para expressar diferentes retornos de 
// multiplas chamadas a uma mesma função 

const myMockFunction = jest.fn()
.mockImplementationOnce(callback=>callback(null,true))
.mockImplementationOnce(callback=>callback(null,false))

myMockFunction((err,val)=>console.log(val))

myMockFunction((err,val)=>console.log(val))

//A função é chamada 4 vezes mas, mockImplementationOnce só executa a implementação 
// uma unica vez então, as chamadas seguintes executam a implementação default
const myMockFn2 = jest.fn(()=>'default')
.mockImplementationOnce(()=>'first call')
.mockImplementationOnce(()=>'second call')

console.log(myMockFn2(),myMockFn2(),myMockFn2(),myMockFn2())
test('',()=>{})

// retornando o próprio método ? 
const myObject = {
    myMethod:jest.fn().mockReturnThis()
}

const otherObject = {
    myMethod:jest.fn(()=>{
        return this
    })
}

