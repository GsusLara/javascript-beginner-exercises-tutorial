var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
   for (let i = 0; i < 4; i++) {
      sumOfAllLuckyNumbers=sumOfAllLuckyNumbers+person.lucky_numbers[i]
    }
    for (let n = 0; n < 4; n++) {
      sumOfAllLuckyNumbers=sumOfAllLuckyNumbers+person2.lucky_numbers[n]
    }
    for (let k = 0; k < 4; k++) {
      sumOfAllLuckyNumbers=sumOfAllLuckyNumbers+family.lucky_numbers[k]
    }   
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3]=33
family.name="Jimmy";
family.age=13;
family.gender="male";
family.lucky_numbers=[1, 2, 3, 4];
family.significant_other="null";
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 