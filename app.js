//  1 - create object
const person = {
    fname: "ahmed ",
    lname : "hossam ",
    age : 20 ,
    city : "alex"
}

// 2 - change obj to Json
let personJson = JSON.stringify (person)    
console.log(personJson)   

// 3 - store in file 
const fs = require ("fs");
fs.writeFileSync ( "Data.json" , personJson )

// 4 - read file 
console.log(fs.readFileSync("Data.json").toString())

// 5 - Convert to obj 
const personObj = JSON.parse (personJson)     
console.log(personObj)

// 6 - Update data
console.log(person.fname="adel", person.lname="ahmad" , person.age=40 , person.city="cairo")

// 7 - convert obj to Json 
personJson = JSON.stringify (person)    
console.log(personJson) 

// 8 - store in file 
fs.writeFileSync ( "Data.json" , personJson )