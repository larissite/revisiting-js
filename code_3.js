// 3. Create a length converter function
// Let's start with a conversion from kilometers to miles. 
// The function should include the input in kilometers and return the answer in miles.

// note: since I live in country that uses kilometers as unit of length, I'm doing the miles to kilometers conversion.

function convertMilesToKm(miles){   
        let kilometers = Math.round(miles * 1.609)
        return `${miles} miles equals ${kilometers} kilometers.`
}

console.log(convertMilesToKm(27))
console.log(convertMilesToKm(103))
console.log(convertMilesToKm(75))
console.log(convertMilesToKm(168))