// 4. Calculate the sum of numbers within an array
//You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution.
//Have one array with negative and positive numbers and another with integers and decimals.

function sumArray(){
    let array = [2, 4, 5, -1, 0.1, 7, -5, 25, 0.87]
    return array.reduce((a,b)=> a + b, 0)
    
}

console.log(sumArray())

// https://abre.ai/reduceexamples
