function findShort(s){
    const arr = s.split(' ');
    let result = arr[0].length;
    for(let i = 0; i < arr.length; i++){
        if( arr[i].length < result){
            result = arr[i].length;
        }
    }
    return result;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));// 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"));// 3);
console.log(findShort("Let's travel abroad shall we"));// 2);
