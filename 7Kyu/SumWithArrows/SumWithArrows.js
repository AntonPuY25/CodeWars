const Sum = sum = (arr) => arr.reduce((acc, number) => acc + number, 0)

var test = [[1,2,3,4,5,6,7,8,9,10],[71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38]]

console.log(sum(test[0]))//, 55);
console.log(sum(test[1]))//, 32830.6);
