function digits(n) {
   return n.toString().length
}

console.log(digits(5))//, 1, "Fail!");
console.log(digits(12345))//, 5, "Fail!");
console.log(digits(9876543210))//, 10, "Fail!");
