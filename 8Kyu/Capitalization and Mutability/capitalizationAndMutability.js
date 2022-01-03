function capitalizeWord(word) {
    const arrWord = word.split('')
    arrWord.splice(0,1,word[0].toUpperCase())
    return arrWord.join('')
}

console.log(capitalizeWord('word'));// 'Word';
