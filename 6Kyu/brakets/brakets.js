function check(str, bracketsConfig) {
    const closeBracket= Object.fromEntries(bracketsConfig)

    let stack = [];

    for (let i = 0; i < str.length; i++) {
       str[i] === closeBracket[stack[stack.length - 1]]
           ? stack.pop()
           : stack.push(str[i]);

    }

    return stack.length === 0;

}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|',]];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

//
console.log(check('()', config1)) // -> true
console.log(check('((()))()', config1)) // -> true
console.log(check('())(', config1)) // -> false
console.log(check('([{}])', config3)) // -> true
console.log(check('[(])', config2)) // -> false
console.log(check('||', config4)) // -> true
console.log(check('|(|)', config5)) // -> false
console.log(check('|()|(||)||', config5)) // -> true
