// 8. Remove the spaces found in a string

function noSpaceString(string){
    return string.trim().split(" ").join("")
  }

  console.log(noSpaceString("hell   o, w o    r l  d    !"))
  console.log(noSpaceString(" co d  i    n g   "))
  console.log(noSpaceString("22 56 91 2  5"))

// You could scale this function to clean up specific fields of data, such as zip codes.

function cleanZipCode(string){    
    return string.replace(/\.|\-/g, '')
  }

  console.log(cleanZipCode("18.957-159"))
