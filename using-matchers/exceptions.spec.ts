function compileAndroidCode(){
    throw new Error('you are using the wrong JDK!')
}

test('compling android goes as expected',()=>{
    expect(()=>compileAndroidCode()).toThrow();
    expect(()=>compileAndroidCode()).toThrow(Error)

    expect(()=>compileAndroidCode()).toThrow('you are using the wrong JDK!')
    expect(()=>compileAndroidCode()).toThrow(/JDK/)

    //exactly
    // expect(()=>compileAndroidCode()).toThrow(/^you are using the wrong JDK$/) FAILS
    expect(()=>compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/)
})