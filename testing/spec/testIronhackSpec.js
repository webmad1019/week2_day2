describe("HelloIronhack function", () => {

  it("Must say Hi yay!", () => {
    expect(helloIronhack()).toEqual("Hi yay!")
  })
})

describe("CalculateMe function", () => {

  it("Must return 0 if the Array is empty", () => {
    expect(calculateMe([])).toEqual(0)
  })

  it("Must return the first element on the array when a non-empty Array is passed", () => {
    expect(calculateMe([2])).toEqual(2)
    expect(calculateMe([3, 6])).toEqual(3)
  })
})



describe("Person object", () => {

  it("Must have an 'age' property", () => {
    expect(person.age).toBeDefined();
  })

  it("'age' property must have an initial value of 22", () => {
    expect(person.age).toEqual(22);
  })

  it("Must have a grow method", () => {
    expect(typeof person.grow).toEqual('function')
  })

  it("grow method must increase or decrease the age property value as many units as argumented", () => {
    person.grow(5)
    expect(person.age).toEqual(27)
    person.grow(-2)
    expect(person.age).toEqual(25)
    person.grow(-3)
    expect(person.age).toEqual(22)
  })

  it("must NOT have a height property", () => {
    expect(person.height).toBeUndefined()
  })
})