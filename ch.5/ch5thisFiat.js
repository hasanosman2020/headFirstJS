//without the this keyword the function does not work

let fiat = {
  make: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Sky Blue',
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start: function () {
    this.started = true
  },
  stop: function () {
    this.started = false
  },
  drive: function () {
    if (this.started) {
      alert(this.make + '  ' + this.model + 'goes zoom zoom!')
    } else {
      alert('You need to start the engine first before you start the car.')
    }
  }
}

fiat.start()
fiat.drive()
fiat.stop()
