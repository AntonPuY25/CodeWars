function sentence(List) {
    const obj = {}
 List.forEach(item=>{
        const key = Object.keys(item)[0];
       obj[key] = item[key]
    })
  const sortedObject = Object.keys(obj).map(item=>item).sort((a,b)=>a-b)
    const resultObject= {}
    test.forEach(item=>{
        sortedObject[obj[item]] = item;
    })
    return Object.keys(resultObject).join(' ')
}

let List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];


console.log(sentence(List))//, 'Vatsan took his dog for a spin');
