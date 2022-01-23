function nbDig(n, d) {
    let result = 0;
    for (let i=0;i<=n;i++){
        let square=(g*g+"").split("");
        square.forEach((s)=>s==d?result++:null)
    }return result;
}



console.log(nbDig(1224, 8))//, 7733)
console.log(nbDig(11549, 1))//, 11905)
console.log(nbDig(25, 1))//, 11)
console.log(nbDig(10, 1))//, 4)
console.log(nbDig(5750, 0))//, 4700)
console.log(nbDig(11011, 2))//, 9481)


