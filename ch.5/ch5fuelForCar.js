//In order to drive the car we need to add fuel to it, so we add a new property to the object and call it fuel and a new method called addFuel - the addFuel method will have a parameter 'amount' and we use that to  increase the amount of fuel in the fuel property.

let fiat = {
  make: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Medium Blue',
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    this.started = true
  },
  stop: function () {
    this.started = false
  },
  /*drive: function(){
      if(this.started){
          alert(`The ${this.make} goes "vroom vroom"`)
      } else {
          alert('You need to start the engine first before being able to drive the car.');
      }
  }*/
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(`The ${this.make} goes "vroom vroom"`)
        this.fuel = this.fuel - 1
      } else {
        alert('There is no fuel in the car. You need to add fuel.')
        this.stop()
      }
    } else {
      alert('You need to start the engine first.')
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount
  }
}

//Now we have the property fuel and a ,method of adding fuel to the car, so now we need to  be able to check if there is fuel in the car. If there is fuel in the car then we can drive it and we subtract one from the amount parameter, so we tweak the drive method like so:

fiat.start()
fiat.drive()
fiat.addFuel(2)
fiat.start()
fiat.drive()
fiat.drive()
fiat.drive()
fiat.stop()

/*start: function(){
    if(fuel == 0){
        alert('The car has no fuel.')
    } else {
        this.started = true;
    }
}
*/
