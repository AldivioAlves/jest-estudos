function forEach(items: Array<any>, callback: Function) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

const mockCallback = jest.fn(x => {
    return 42 + x
})

forEach([0, 1], mockCallback)

// teste vai passar pois a função mockCallback 
// só sera chamada 2 vezes visto que só tem dois 
// elementos no primeiro parametro da chamada a função forEach
test('call function twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2)
})

//testando se a primeira chamada o parametro x tem valor 0
test('first argument of the first call to the function was 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0)
})

// testando se na segunda chamada o argumento é 1
test('first argument of the second call to the function was 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1)
})

// pass visto que o primeiro argumento 0 somado com o valor fixo 42 = 42 
test('return value of first call is 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42)
})