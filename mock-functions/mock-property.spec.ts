// inpecionando os valores, retornos e instancias das funções 

const myMock1:any = jest.fn()

const a = new myMock1();

const myMock2:any = jest.fn();

const b = {}

const bound = myMock2.bind(b)
bound()

test('',()=>{
    console.log(myMock2.mock.contexts); // retornando a instancia de myMock2
})

test('expect mock1 called twice',()=>{
    myMock1()
expect(myMock1.mock.calls.length).toBe(2)
})

test('',()=>{
    expect(myMock1.mock.contexts[0]).toBe(a)
})

