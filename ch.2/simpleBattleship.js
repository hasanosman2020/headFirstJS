const location1 = 2
const location2 = 3
const location3 = 4

let guesses = 0
let hits = 0
let shipIsSunk = false

while (shipIsSunk == false) {
  const guess = prompt('Ready, aim, fire! (enter number b/w 0 and 6')
  if (guess < 0 || guess > 6) {
    alert('Please enter a valid input between 0 and 6.')
  } else {
    guesses = guesses + 1

    if (guess == location1 || guess == location2 || guess == location3) {
      alert('HIT!')
      hits = hits + 1
      if (hits == 3) {
        shipIsSunk == true
        alert('You have sunk my battleship!')
      }
    } else {
      alert('MISS!')
    }
  }
}
const stats = `You have taken £{guesses} to sink my battlehsip.`
alert(stats)
