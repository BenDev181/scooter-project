const ScooterApp = require('../src/ScooterApp.js')
const User = require('../src/User.js')
const Scooter = require('../src/Scooter.js')

let scooterApp;
beforeEach(() => {
  scooterApp = new ScooterApp()
})

describe('ScooterApp Property Tests', () => {
  test('ScooterApp class should create ScooterApp instance', () => {
    expect(scooterApp).toBeInstanceOf(ScooterApp)
  })
})

describe('ScooterApp Method Tests', () => {
  test('Should return instance of User when registerUser() is called', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
  test('LoginUser() should login user', () => {
    const user = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    scooterApp.loginUser('Joe Bloggs', 'test123')
    expect(user.loggedIn).toBe(true)
  })
  test('LogoutUser() logs out user', () => {
    scooterApp.loginUser('Joe Bloggs', 'test123')
    scooterApp.logoutUser('Joe Bloggs')
    expect(user.loggedIn).toBe(false)
  })
  test('CreateScooter() creates a new scooter, adds it to station scooter list', () => {
    scooterApp.createScooter('Manchester')
    expect(scooterApp.stations['Manchester'].length).toBe(1)
    expect(() => {scooterApp.createScooter('Man')
    }).toThrow('no such station')
  })
  test('DockScooter() adds scooter to dock list and returns error if not possible', () => {
    const newScooter = new Scooter('Manchester')
    scooterApp.dockScooter(newScooter, 'London')
    expect(scooterApp.stations['London'].length).toBe(1)
    expect(() => {scooterApp.dockScooter('Man')
    }).toThrow('no such station')
  })
})

// log in

// log out

// rent scooter

// dock scooter
