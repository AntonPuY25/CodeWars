function colourAssociation(array){
    return  array.reduce((acc,item)=> {
        const obj = {}
        obj[item[0]] = item[1];
        acc.push(obj)
        return acc;
    },[],);
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))//, [{white:"goodness"},{blue:"tranquility"}]);
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]))//, [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
