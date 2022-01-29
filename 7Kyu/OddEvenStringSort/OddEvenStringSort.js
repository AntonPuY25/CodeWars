function sortMyString(S) {
    const firstArr =[]
    const secondArr = []
    S.split('').map((item,index)=>{
        if(index % 2 === 0){
            firstArr.push(item)
        }else{
            secondArr.push(item)
        }
    })
    firstArr.push(' ')

    return [...firstArr, ...secondArr].join('');
}

console.log(sortMyString("CodeWars"))//, "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"))//, "YOU'RE CLEVER");
