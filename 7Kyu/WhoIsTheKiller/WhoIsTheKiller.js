function killer(suspectInfo, dead) {
    let name;
    Object.keys(suspectInfo).forEach(item=>{
        const arr = []
        const copyDead = [...dead]
        suspectInfo[item].map(items=>{
            if(copyDead && copyDead.includes(items)){
                const index = copyDead.indexOf(items)
                copyDead.splice(index,1)
            }
        })
       if(!copyDead.length){
           name = item
       }
    })
    return name;
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))//, 'James');
