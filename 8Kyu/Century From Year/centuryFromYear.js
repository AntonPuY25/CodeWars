function century(year) {
    if(year<100) return 1
    let cen = parseInt(year / 100);
    let rem = year % 100;
    return rem === 0 ? cen : cen + 1;
}

console.log(century(1705))//18
console.log(century(1900))//19
console.log(century(1601))//17
console.log(century(89))//1
console.log(century(670952))//68
console.log(century(155574))//16
console.log(century(384649))//39
