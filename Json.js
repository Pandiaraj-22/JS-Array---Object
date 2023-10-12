const jsonData = {
    Name : "Pandiaraj.M",
    Age: 21,
    Degree : "BE",
    Qualification : "computer science engineering",
    passedOut  : 2023,
    array:["Pandiaraj.M1", 21, "BE", "computer science engineerin", 2023, {nestedObj : 1 "yearsexp"} ],
    Obj:{
         Father: "Marimuthu",
         Mother: "Veera lakshmi",
         Location: "Virudhunagar",
    },
    isStudent: true,
};
console.log(jsonData);
console.log(jsonData.array[1],nestedObj);
console.log(jsonData.Obj.Office[0]);
console.log(jsonData.);

const countryArr =["IND", "CHN", "US", "UK", "EUR", "GER"];
for(let i = 0; i < countryArr.length; i++) {
    log(countryArr[i]);
}
//object
const countryObj ={
    India: "IND",
  China: "CHN",
  UnitedStated: "US",
  unitedKingdom: "UK",
  Europe: "EUR",
  Germany: "GER",
 };
log("looping object values-------");
const objectValues = Object.values(countryObj);
log(objectValues);
//for loop for object values
for(let i = 0; i < objectValues.length; i++) {
log(objectValues[i]);
}
//for loop for  pobject keys
log("Looping for object key-------");
const objectKeys = Object.keys(countryObj);
 log(objectKeys)

for(let i = 0 ; i < objectKeys.length; i++) {
    log(objectKeys[i]);
}
//For the given Json iterate over all for loops (for, for in, for of, forEach ?
/// Types of Loop
// forin, forof, foreach
//foreach -> best use in of array
log("-------for each loop-------")
//the parameter should be the order( value, index, AcctualArray)
countryArr.forEach((value, index, acctualArray) => {
    log(` Value = ${value}
          Index = ${index}
          AcctualArray = ${acctualArray}`)
});
objectKeys.forEach((value) => {
    log(`
         object keys = ${value}
          object values = ${countryObj[value]}`
          );
});
/// for in loop////-> best used for object
log("------forin loop------");
//for (keys in object Name)
for (key in countryObj) {
    log(`Keys:${key}
         Values: ${countryObj[key]}`);

}
//forin array
log("-----forin loop array----");

for(k in countryArr) {
    //forin for array i'll index
    log(`Index of Array : ${k}
          values of Array: ${countryArr[k]}`);
        
}

//forof loop-> best used for String
log("------for of loop------");
const countryString = "Pandiaraj"
for(str of countryString) {
    log(`values = ${str}`);
}
 log("----for of in array-----");
 for(value of countryArr){
    log(`array value = ${value}`);
 }
log("-----for of in object------");

for(objVal of objectKeys){
    log(`object keys = ${objVal}
          object values = ${objectKeys[objVal]}`)
}

//Create your own resume data in JSON format ?

const data = JSON.parse(xhr.response);
  console.log(data);
  console.log(xhr.status);
  for (let i = 0; i < data.length; i++) {
    console.log(`
    Name : ${data[i].name.common}
    Flag : ${data[i].flags.png}
    Population : ${data[i].population}
    `);
  };
