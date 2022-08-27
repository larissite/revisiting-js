//https://abre.ai/challengejs

// 1. Print all even numbers from 0 – 10
//Try to make the solution to this problem as efficiently as possible. 
//Consider using loops that would allow you to type the fewest characters/commands. 
//While you could simply print the even numbers, get creative and see how you could
// output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

function printEven(number){
    for(let i = 0 ; i < number; i++){
        if(i %2 === 0){
            console.log(i)
        }
    }
}

printEven(100)
