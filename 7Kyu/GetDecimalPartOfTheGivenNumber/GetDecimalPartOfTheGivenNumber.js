function getDecimal(n){
    let number = Math.abs(n)
    if(Number.isInteger(number)) return 0
   const result =  number.toString().split(".")[1].substr(0);
    return Number(`0.${result}`)
}



console.log(getDecimal(-1.2))//, 0.2);
console.log(getDecimal(10))//, 0.2);
console.log(getDecimal(4.531231))//, 0.2);
