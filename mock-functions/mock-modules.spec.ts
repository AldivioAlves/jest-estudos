import Users  from "./Users";
const axios:any = require('axios')

/**
 * mocando um módulo 
 */

jest.mock('axios')
test('should fetch users',()=>{
    const users = [
        {name:"Aldivio Alves",age:33}, 
        {name:"Luciane Alves",age:35}
    ]
    const resp = {data:users}
    axios.get.mockResolvedValue(resp)

    return Users.all().then(data=>
        expect(data).toEqual(users))
})

