function fizzBuzz() {  
    // Your code here
    for (var i= 1; i < 101; i++) {
        var numero=i
        if (( numero % 3 ) == 0 && ( numero % 5 ) == 0) {
            console.log("FizzBuzz");
        } else if (( numero % 3 ) == 0) {
            console.log("Fizz");
        } else if (( numero % 5 ) == 0){
            console.log("Buzz");
        }else 
        console.log(numero);
    }
    return i
}

fizzBuzz();