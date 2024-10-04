const User = require('./User.js')

class Scooter {
  static nextSerial = 1
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial
    Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }
  rent(user) {
    if (!(user instanceof User)) {
      throw new Error('User not recognised')
    }
    if (this.charge <= 20) {
      throw new Error('scooter needs to charge')
    }
    if (this.isBroken == true) {
      throw new Error('scooter needs repair')
    }
    this.user = user
    this.station = null
  }
  dock(station) {
    this.station = station
    this.user = null
  }
}

//const scooter1 = new Scooter("London")
//console.log(scooter1)


module.exports = Scooter
