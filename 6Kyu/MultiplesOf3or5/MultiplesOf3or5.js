function solution(number){
    if(number < 0) return 0;
    const arr =[]
    let i = 0;
    let k = 0;
    while (k<number){
        k>0 && arr.push(k)
        k +=3

    }
    while (i<number){
        i>0 && arr.push(i)
        i +=5

    }

    return arr.filter((item,index)=> index === arr.indexOf(item)).reduce((acc,item)=> acc + item,0)
}


console.log(solution(20),'solution(10)')
