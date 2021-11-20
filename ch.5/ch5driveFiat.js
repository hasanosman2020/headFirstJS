//add behaviour to the car object  and the way we add behaviour to an object is by adding a property to it and giving that property the value of a function (the name of the function is the name of the property)
//then use dot notation to call object's function method

let fiat = {
  make: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Medium Blue',
  passengers: 2,
  convertible: false,
  mileage: 88000,
  drive: function () {
    alert('zoom zoom')
  }
}

fiat.drive() //here we are 'calling the drive method in the fiat object'

//model an object's behaviour, in our car example here, a car can only be driven if the engine has been started, so we add to the object 'car'
-
