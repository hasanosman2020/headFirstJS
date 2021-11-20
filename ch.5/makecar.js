//the user is designing a car which must have a make, a model, a year, and a colour, it can be a convertible and must include the number of  passengers it can carry - all these features will be chosen randomly
//start by defining the function and then having four arrays with the makes, models, years, and colours, an array with true and false options for whether a car is convertible and a random number for the number of passengers:
function makeCar () {
  let makes = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'VW Golf']
  let models = ['sport', 'saloon', 'coupe', '4-wheel', 'desert']
  let years = ['2010', '2015', '2021', '2023']
  let colours = [
    'sky blue',
    'red wine',
    'platinum princess',
    'white heat',
    'black night'
  ]

  let convertible = [true, false]

  //in order to randomly choose one item from each array the user will need a method to specify which index number to choose, so we need to generate a set of four random numbers to combine with each array:

  let rand1 = Math.floor(Math.random() * makes.length)
  let rand2 = Math.floor(Math.random() * models.length)
  let rand3 = Math.floor(Math.random() * years.length)
  let rand4 = Math.floor(Math.random() * colours.length)

  //we also have a random number to choose wheher a car is convertible or not
  let rand5 = Math.floor(Math.random() * 2)

  //add a random number for the number of passengers, we add 1 because there must be at least on passenger
  let rand6 = Math.floor(Math.random() * 5)

  //now we design a car and make a new object 'car' which has property values made up from the values in the arrays, we can also add the property of mileage and set that mileage to zero since it is a new car:

  let car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    colour: colours[rand4],
    convertible: convertible[rand5],
    passengers: rand6,
    mileage: 0
  }
  return car
}

//the last statement shows that we are returning an object 'car' from the function, so lets look at the code that calls makeCar();
function displayCar (car) {
  console.log(
    `Your new car is a ${car.year}${car.colour}${car.make}${car.model}`
  )
}
let carToSell = makeCar()
displayCar(carToSell)

//here, we first call the makeCar() function and we assign the value of the object(car) that it returns to the variable carToSell. Then  we push the car object returned from the makeCar() function to the function displayCar(), and the function displayCar() displays a few of its properties in the console.
