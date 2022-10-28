const {getChangedFilesForRoots} = require('jest-changed-files')
const {diff} = require('jest-diff')
const {parseWithComments} = require('jest-docblock')
const testee =jest.fn(()=> getChangedFilesForRoots(['/'],{
    lastCommit:true
}).then(result=>{
    return result.changedFiles
}))

test('',async()=>{
    const result = await testee()
    console.log(result)
})

//diferença entre objetos
const valueA= {a:{b:{c:5}}}
const valueB= {a:{b:{c:6}}}

// separa os comentarios e pragmas
const diffResult = diff(valueA,valueB)
console.log(diffResult)

const code = `
/**
 * This is a sample
 *
 * @flow
 */

 console.log('Hello World!');
`;

const parsed = parseWithComments(code);

console.log(parsed);
