function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n))
}

console.log(isPowerOfTwo(2))//, true)
console.log(isPowerOfTwo(4096))//, true)
console.log(isPowerOfTwo(5))//, false)
console.log(isPowerOfTwo(234))//, false)
