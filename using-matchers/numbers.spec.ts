test('two plus two',()=>{
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('adding floating point numbers',()=>{
    const value = 0.1+0.2;
   // expect(value).toBe(0.3)  erro no arredondamento 0.1 + 0.2= 0.30000000000000004
    expect(value).toBeCloseTo(0.3);
})
