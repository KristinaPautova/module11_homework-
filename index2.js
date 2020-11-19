function simpleNumbers(number){
if(number < 1000 ) {
    if(number < 2 || number % 2 === 0  ){
            return (`Простое число ${number}`)
    } else {
            return  (`Не простое число ${number}`)}
} else {
    return ('Данные неверны')
}
}
console.log(simpleNumbers(0))
