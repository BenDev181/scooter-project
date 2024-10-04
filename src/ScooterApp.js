const User = require('./User.js')
const Scooter = require('./Scooter.js')

class ScooterApp {
  constructor() {
    this.stations = {
      'London': [],
      'Manchester': [],
      'Edinburgh': []
    }
    this.registeredUsers = {};
  }
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('already registered')
    }
    if (age <= 18) {
      throw new Error('too young to register')
    }
    const newUser = new User(username, password, age)
    this.registeredUsers[username] = newUser
    console.log('user has been registered')
    return newUser
  }
  loginUser(username, password) {
    const user = this.registeredUsers[username]
    if (!user) { //Also ensures password is a match
      throw new Error('User or password is invalid')
    }
    user.login(password)
    console.log('user has been logged in')
  }
  logoutUser() {

  }
  createScooter(station) {
    if (!this.stations.hasOwnProperty(station)) {
      throw new Error('no such station')
    }
    const newScooter = new Scooter(station)
    console.log('created new scooter')
    this.stations[station].push(newScooter)
    newScooter.station = station
    return newScooter
  }
  dockScooter(scooter, station) {
    if (!this.stations.hasOwnProperty(station)) {
      throw new Error('no such station')
    }
    if (false/*this.stations[station] == scooter*/) {
      throw new Error('scooter already at station')
    }

    scooter.dock(station)
    this.stations[station].push(scooter)
    console.log('scooter is docked')
  }
  rentScooter(scooter, user) {
    scooter.rent(user)
  }
  print() {
    console.log(this.stations)
  }
}

const scooterApp = new ScooterApp()
const newScooter = new Scooter("Manchester")
scooterApp.dockScooter(newScooter, "Manchester")
console.log(scooterApp.stations)
scooterApp.print()

module.exports = ScooterApp
