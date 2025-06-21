let score = "33"

// check the type of the value comming
console.log(typeof score)

// conversion of values
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/* incase of null its convert into 0 */
let s = null

// check the type of the value comming
console.log(typeof s)

// conversion of values
let valueIN = Number(s)
console.log(typeof valueIN)
console.log(valueIN)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn ="name"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true; 0 => false
// "" => false ; "name" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)