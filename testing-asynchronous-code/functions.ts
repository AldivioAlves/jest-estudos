export async function fetchData():Promise<string>{
    return 'peanut butter'
}

export async function fetchDataResolveReject() {
  return  new Promise((resolve,reject)=>{
        reject('error')
    })
}