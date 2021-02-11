/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(){
    var digito = Math.floor((Math.random() * 10));
    return(digito);
}

console.log(generateRandom());