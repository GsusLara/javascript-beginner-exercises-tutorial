
function sing(){
    var coro=[]; 
    var cancion=[];
    for (let i = 0; i < 4; i++) {
        coro.unshift('let it be');  
    }
    cancion.unshift(coro);
    cancion.push('words of wisdom, let it be,');
    cancion.push(coro);
    cancion.push('there will be an answer, let it be');
    return cancion;
}
//Your code above ^^^

console.log(sing());