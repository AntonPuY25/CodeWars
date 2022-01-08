function finalGrade (exam, projects) {
if(exam>90 || projects > 10){
    return 100
}else if(exam > 75 && projects >= 5){
    return 90
}else if(exam > 50 && projects >=2){
return 75
}else {
    return 0
}
}


console.log(finalGrade(55, 3))//,75);
console.log(finalGrade(55, 0))//,0);
console.log(finalGrade(20, 2))//,0);
console.log(finalGrade(0, 3))//,0);
console.log(finalGrade(0, 11))//,100);
console.log(finalGrade(51, 2))//,0);
console.log(finalGrade(51, 2))//,75);
console.log(finalGrade(90, 1))//,0);
