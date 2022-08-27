// 7. Create a function that filters out negative numbers

function filterNegative(){
    let numbers = [-321, -47, -25, -36, -1, 0 , 49, 26, 75]
    return numbers.filter(item => item > -1)
}

console.log(filterNegative())