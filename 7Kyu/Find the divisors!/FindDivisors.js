function divisors(integer) {
    let arr=[]

    for(let i = 2; i<integer;i++){
        if(integer%i ===0){
            arr.push(i)
        }
    }
 if(!arr.length){
         return `${integer} is prime`
 }else{
     return arr
 }

};
console.log(divisors(15))// [3, 5]);
console.log(divisors(12))// [2, 3, 4, 6]);
console.log(divisors(13))// "13 is prime");

