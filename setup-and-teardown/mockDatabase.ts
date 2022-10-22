export const database:string[] = []

export const initializeCitydatabase =()=>{
    database.push('Franca')
    database.push('São Paulo')
    database.push('Taiobeiras')
    database.push('Montes Claros')
    database.push('Ribeirão Preto')
    database.push('Salinas')
}
export const clearCityDatabase=()=>{
    database.splice(0,database.length)
}
