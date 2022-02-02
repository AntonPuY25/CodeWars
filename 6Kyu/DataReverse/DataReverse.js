function dataReverse(data) {
    const copyData = [...data].reverse()

    const arr = []
    for(let i = 0; i < data.length + 1; i++){
        let result = copyData.splice(0,8).reverse()
        arr.push(result)
    }
    let arr1= []
arr.forEach(item=>{
        arr1  = [...arr1,...item]
    })
return arr1
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse(data1))//,data2)
