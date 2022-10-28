// nomeando as mock functions

const myMockFnWithName  = jest
.fn()
.mockReturnValue('default')
.mockImplementation(scalar=>42 + scalar)
.mockName('add42')

test('',()=>{})
