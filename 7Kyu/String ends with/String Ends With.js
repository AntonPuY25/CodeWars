function solution(str, ending){
  if(!ending.length || !str.length) return  true
  return  str.split('').splice(-ending.length).join('') === ending
}

console.log(solution('abcde', 'cde'))//, true)
console.log(solution('abcde', 'abc'))//, false)
console.log(solution('abc', ''))//, false)
