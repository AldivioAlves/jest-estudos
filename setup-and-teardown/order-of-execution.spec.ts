/*
temos dois describes dentro de um escopo e entre os describes
um test avulso.
Jest executa primeiramente as rotinas dentro dos describes 
depois disso executa os testes na ordem que foram parametrizados
*/
describe('describe outer',()=>{
    
    console.log('describe other-a')

    describe('describe inner 1',()=>{
        
        console.log('describe inner 1')

        test('test 1',()=>console.log('test 1'))

    })

    console.log('describe outer-b')

    test('test 2',()=>console.log('test 2'))

    describe('describe inner 2',()=>{
        
        console.log('describe inner 2')

        test('test 3', ()=>console.log('test 3'))
    })

    console.log('describe outer-c')


})