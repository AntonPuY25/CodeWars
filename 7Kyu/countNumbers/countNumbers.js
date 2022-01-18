function add(num1, num2) {
    const arr1 = num1.toString().split('').reverse();
    const arr2 = num2.toString().split('').reverse();
    const maxLength = arr1.length > arr2.length  ? arr1.length : arr2.length;

    const result = [];

    for(let i = 0; i < maxLength; i++){
        if(arr1?.[i] && arr2?.[i]){
            result.push((Number(arr1?.[i])+ Number(arr2?.[i])).toString())
        }else if(arr1?.[i]){
            result.push(Number(arr1?.[i]))
        }else if(arr2?.[i]){
            result.push(Number(arr2?.[i]))
        }
    }
    return Number(result.reverse().join(''))
}

console.log(add(16, 18))//, 214);
console.log(add(26, 39))//, 515);
console.log(add(122, 81))//, 1103);
