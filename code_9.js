//9. Return a Boolean if a number is divisible by 10

function returnBoolean(number){   
    if(number % 10 === 0){
        return "True"
    } else {return "False"}

}

console.log(returnBoolean(10))
console.log(returnBoolean(25))
console.log(returnBoolean(3))
console.log(returnBoolean(50))