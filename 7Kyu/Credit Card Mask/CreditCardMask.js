function maskify(cc) {
    if(cc.length < 4) return  cc;
    return   cc.split('').map((item,index)=>{
        if(index < cc.length - 4){
           return   '#'
        }
        return item
    }).join('')

}
console.log(maskify('4556364607935616'));// '############5616');
console.log(maskify('1'));// '1');
console.log(maskify('11111'));// '#1111');
