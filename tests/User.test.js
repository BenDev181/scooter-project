const User = require('../src/User')

let user1;

beforeEach(() => {
  user1 = new User('Ben', 'password', 23)
})

describe('User Property Tests', () => {
  test('User class should create User instance', () => {
    expect(user1).toBeInstanceOf(User)
  })
  test('User class correctly assigns username property', () => {
    expect(user1.username).toBe('Ben')
  })
  test('User class correctly assigns password property', () => {
    expect(user1.password).toBe('password')
  })
  test('User class correctly assigns age property', () => {
    expect(user1.age).toBe(23)
  })
  test('User class correctly defaults user to be logged out', () => {
    expect(user1.loggedIn).toBe(false)
  })
})

describe('User Method Tests', () => {
  test('Login() method logs the user in if password is correct and returns error if incorrect', () => {
    user1.login('password')
    expect(user1.loggedIn).toBe(true)
    expect(() => {user1.login('incorrect')}).toThrow('incorrect password')
  })
  test('Logout() method logs the user out', () => {
    user1.logout()
    expect(user1.loggedIn).toBe(false)
  })
})
