function nbDig(n, d) {
    let result = 0;
    let countArr = []
    for(let i = 0; i <= n; i++){
        if(Math.pow(i,2).toString().match('64')){
          countArr.push(Math.pow(i,2))
        }
    }
    const newStr = countArr.join('');
    console.log(countArr,'countArr')
    console.log(countArr.length,'countArr.Length')
    newStr.split('').forEach(item=>{
        if(Number(item) === 6 || Number(item) === 4){
            result++
        }
    })
    return result;
}



console.log(nbDig(1224, 8))//, 7733)
// console.log(nbDig(11549, 1))//, 11905)
// console.log(nbDig(25, 1))//, 11)
// console.log(nbDig(10, 1))//, 4)
// console.log(nbDig(5750, 0))//, 4700)
// console.log(nbDig(11011, 2))//, 9481)


