function getSum( a,b )
{
    if(b<a) return b;
    let result = 0;
   for(let i = 0; i < b;i++){
       if(result < b){
           result++
       }

   }
    console.log(result)
}

console.log(getSum(383 ,574))//574
console.log(getSum(572  ,-566))//-566

