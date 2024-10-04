const Scooter = require('../src/Scooter')

let scooter1;

beforeEach(() => {
  Scooter.nextSerial = 1
  scooter1 = new Scooter("London")
  scooter2 = new Scooter("London")
})

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    expect(scooter1).toBeInstanceOf(Scooter)
  })
  test('Scooter class correctly assigns station property', () => {
    expect(scooter1.station).toBe("London")
  })
  test('Scooter class initially assigns user to null', () => {
    expect(scooter1.user).toBe(null)
  })
  test('Scooter class initially assigns serial as 1 and every additional scooter sequentially from 1', () => {
    expect(scooter1.serial).toBe(1)
    expect(scooter2.serial).toBe(scooter1.serial + 1)
  })
  test('Scooter class initially assigns charge to 100', () => {
    expect(scooter1.charge).toBe(100)
  })
  test('Scooter class initially assigns isBroken to false', () => {
    expect(scooter1.isBroken).toBe(false)
  })
})

// Method tests
describe('scooter methods', () => {
  test('Scooter is checked out if physical conditions are met', () => {
    scooter1.rent("Ben")
    expect(scooter1.user).toBe("Ben")
    expect(scooter1.station).toBe(null)
  })
  test('Scooter is returned to station when dock(station) is called', () => {
    scooter1.dock("Manchester")
    expect(scooter1.station).toBe("Manchester")
    expect(scooter1.user).toBe(null)
  })

  // requestRepair method

  // charge method

})
