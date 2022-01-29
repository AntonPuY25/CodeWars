const spread = (func, args) => func(...args)

console.log(spread(function(x,y){return x+y}, [2,1]))//, 1 )
