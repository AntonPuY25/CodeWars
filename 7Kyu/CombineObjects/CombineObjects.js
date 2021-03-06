function combine(...rest) {
    let result = {
    }
    const copyRest = JSON.stringify(rest);
    JSON.parse(copyRest).forEach((objParam)=> {
         const resultKeys = Object.keys(result);
         const restKeys = Object.keys(objParam);
        resultKeys.forEach(keyResult=>{
             if(restKeys.includes(keyResult)) {
                 objParam[keyResult] = objParam[keyResult] +  result[keyResult]
             }
         })
         Object.assign(result,objParam)
    })
    return result;

}


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

 console.log(combine(objA, objB))//, { a: 13, b: 20, c: 36, d: 3 })
 console.log(combine(objA, objC))//, { a: 15, b: 20, c: 30, d: 11, e: 8 })
 console.log(combine({}, {}, {}))//, {})
console.log(combine(objA, objC, {}))//, { a: 15, b: 20, c: 30, d: 11, e: 8 })
console.log(combine(objA, objC, objD))//, { a: 15, b: 20, c: 33, d: 11, e: 8 })
