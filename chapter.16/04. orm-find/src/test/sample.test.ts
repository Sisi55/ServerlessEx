
describe('Jest Matcher', () => {
  const getUser = (id: number) => {
    if (id < 1) throw new Error('Invalid ID');
    return {
      id,
      name: `name${id}`
    }
  }
  const colors = ['red', 'green', 'blue'];

  test('toEqual & toBe', () => {
    expect(true).toEqual(true);
    expect(getUser(1)).toEqual({id:1, name: "name1"});
    expect(true).toBe(true);
    expect(getUser(1)).not.toBe({id:1, name: "name1"});
    expect(getUser(1)).toStrictEqual({id:1, name: "name1"});
  })

  test('toBeTruthy & toBeFalsy', () => {
    expect(true).toBeTruthy();
    expect(true).toEqual(true);
    expect(false).toBeFalsy();
    expect(false).toEqual(false);
  })

  test('not', () => {
    expect(true).not.toBeFalsy();
    expect(false).not.toBeTruthy();
    expect(getUser(1)).not.toBe({id:1, name: "name1"});
  })

  test('toHaveLength & toHaveContain', () => {
    expect(colors).toHaveLength(3);
    expect(colors.length).toBe(3);
    expect(colors).toContain('green');
  });

  test("toMatch", () => {
    expect(getUser(1).name).toMatch(/^name\d$/);
    expect(getUser(2).name).toMatch(/^name\d$/);
  })

  test("toThrow", () => {
    expect(() => getUser(-0)).toThrow();
    expect(() => getUser(-0)).toThrow('Invalid ID');
  })

  test("toBeGreaterThan & toBeGreaterThanOrEqual", () => {
    expect(colors.length).toBeGreaterThan(0);
    expect(colors.length).toBeGreaterThanOrEqual(3);
  })

  test("toBeLessThan & toBeLessThanOrEqual", () => {
    expect(colors.length).toBeLessThan(4)
    expect(colors.length).toBeLessThanOrEqual(3);
  })

  test("toHaveProperty", () => {
    expect(getUser(1)).toHaveProperty('id');
  })
})