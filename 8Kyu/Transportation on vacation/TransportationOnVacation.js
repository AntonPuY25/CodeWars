function rentalCarCost(d) {
    if(d >= 7){
        return d * 40 - 50
    }else if(d >= 3){
        return d * 40 - 20
    }else{
        return  d * 40
    }
}

console.log(rentalCarCost(7))//, 230);
console.log(rentalCarCost(8))//, 270);
console.log(rentalCarCost(9))//, 310);
console.log(rentalCarCost(10))//, 350);
console.log(rentalCarCost(3))//, 100);
console.log(rentalCarCost(4))//, 140);
console.log(rentalCarCost(5))//, 180);
console.log(rentalCarCost(6))//, 220);
console.log(rentalCarCost(1))//, 40);
console.log(rentalCarCost(2))//, 80);
