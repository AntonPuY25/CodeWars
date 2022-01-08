function fakeBin(x){
    const arrString = x.split('');
    const arr =[];
    arrString.map(item=>{
        if(item<5){
            arr.push(0)
        }else{
            arr.push(1)
        }
    })
    return arr.join('')
}
console.log(fakeBin('45385593107843568'))//, '01011110001100111');
console.log(fakeBin('509321967506747'))//, '101000111101101');
console.log(fakeBin('366058562030849490134388085'))//, '011011110000101010000011011');
