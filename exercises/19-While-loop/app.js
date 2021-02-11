
//fix this function:
function startCounting(){
  var counter = 100;
	while(counter <= 100){
        counter --;
        console.log(counter);
        if (counter==0) {
            break;
        } 
	}
   return counter;
}
 startCounting();
 console.log("fin")