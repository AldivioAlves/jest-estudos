import defaultExport, {bar,foo} from './foo-bar-baz'

/**
 * mocando partes de um módulo
 */
jest.mock('./foo-bar-baz',()=>{
    const originalModule = jest.requireActual('./foo-bar-baz')

    return{
        __esModule:true,
        ...originalModule,
        default:jest.fn(()=>'mocked baz'),
        foo:'mocked foo'
    }
})

test('should do a partial mock',()=>{
    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe('mocked baz') //baz modificado pelo método mock
    expect(defaultExport).toHaveBeenCalled();
    expect(foo).toBe('mocked foo') // foo modificado pelo médoto mock
    expect(bar()).toBe('bar')
})

