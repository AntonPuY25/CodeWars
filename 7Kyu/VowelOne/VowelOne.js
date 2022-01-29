function vowelOne(s){
    const arr1 = ['A','E','I','O','U',]

   return  s.split('').map(item=>{
        if(arr1.includes(item.toUpperCase())){
            return 1
        }else{
            return 0
        }
    }).join('')
}

console.log(vowelOne( "vowelOne" ))//, "01010101" );
console.log(vowelOne( "123, arou" ))//, "000001011" );
console.log(vowelOne( "UA*UyOR2u-E&iauvaIyFui5aHy3I" ))//, "11010100101011101100110100010" );
