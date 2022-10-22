/*
Dentro de um arquivo podemos preferir executar apenas um 
teste de varios usando test.only. Se existir outros testes 
com test.only, eles tambem serão executados. 
Caso um teste executado sozinho passe, mas por conta de outros 
testes na mesma execução ele venha a falhar 
podemos usar o beforeEach para limpar os estados dos testes 
que podem influenciar a execução desse que passa quando executado
 sozinho. 
 */

test.only('apenas esse teste será executado',()=>{
    expect(true).toBe(false)
}); 

test('esse teste não vai ser executado',()=>{
    expect('A').toBe('A')
})

test.only('apenas esse teste será executado',()=>{
    expect(true).toBeTruthy()
}); 

