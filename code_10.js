
//10. Return the number of vowels in a string

function countVowels(string){
    let count = 0
    let vowels = 'aAeEiIoOuU'
    for(let i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i]) !== -1 ){
        count +=1;
    }
}
    return count
}

console.log(countVowels("javAscrIpt"))
console.log(countVowels("i Am learning hOw to codE"))