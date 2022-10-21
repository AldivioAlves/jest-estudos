function fetchDataWithCallback(callback){
    return callback(false, 'peanut butter')
}
test('the data is peanut butter',done =>{ // usando esse parametro garante que o teste finalize sem timeout e que a callback seja
    // avaliada antes de acabar o teste.
    function callback(error,data){ 
        if(error){ // teste falahará se o parametro error for true
            done(error)
            return;
        }
        try{
            expect(data).toBe('peanut butter')
            done()
        }catch(error){
            done(error)
        }
    }

    fetchDataWithCallback(callback)
    
})