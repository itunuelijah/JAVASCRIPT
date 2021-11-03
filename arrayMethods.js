/** let numArray = [1,2,3,4,5,6,7,8,9,10,11,12]

function multiply(x){
    for (let y = 0; y = 0; y <= 12; y++){
        // console.log(`${x} * ${y} = ${x * y}`)
    }
}

for (let i = 1; i <= 12; i++){
    numArray.forEach(multiply)
}
*/
// ----------------------------------------
let objArray = [
 {gender: 'male',
     firstname: 'John',
     lastname: 'Smith',
},
{   gender: 'female',
    firstname: 'demola',
     lastname: 'femi',
        
},
{   gender: 'male',
    firstname: 'tife',
     lastname: 'harry',
}
];

// Question 1

objArray.forEach(function(element) {
    // console.log(element.firstname);
});


// Question 2

let newObj = objArray.map(objArray => ({
    fullName: `${objArray.firstname} ${objArray.lastname}`,
    firstname: objArray.firstname,
    lastname: objArray.lastname

  }));
  console.log(newObj);


//   Question 3

let males = objArray.filter(obj => {
    return obj.gender === ('male')
 });
//  console.log(males);

 
 //   Question 4

 let females = objArray.filter(obj => {
    return obj.gender === ('female')
 });
//  console.log(females);


//  Question 5


let newObjArray  = objArray.map(objArray => ({
    age: `${objArray.firstname.length + objArray.lastname.length}`,
    gender: objArray.gender,
    firstname: objArray.firstname,
    lastname: objArray.lastname

  }));
   console.log(newObjArray)









