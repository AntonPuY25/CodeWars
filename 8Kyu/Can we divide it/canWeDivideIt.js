function isDivideBy(number, a, b) {
       return Boolean((number % a === 0 ||number % a=== -0) && (number % b === 0 || number % b=== -0 ))
}

console.log(isDivideBy(-12, 2, -6)) // true
