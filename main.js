const myMap = new Map([
    [1,'powpow'],
    [2,`mango`],
    [3,`jackfruit`],
    [4,`orange`],
    [5,`apple`],
    [6,`banana`] 

])

console.log(myMap.size) //6
 //iterate through with the for..of loop
//this return the key and value pair
 for(let [key ,value] of myMap){
    console.log(`${key}  = ${value} `)
 }
console.log(`---------------`)
 //retur of .key() only 
 for(let key of myMap.keys()){
    console.log(key)
 }
 console.log(`---------------`)
 //return .values() from myMap
 for (let value of myMap.values()){
    console.log(value)
 }
 console.log(`---------------`)
  //return .entries() from myMap (key ,value)
for(let [key ,value] of myMap.entries()){
    console.log( key + " = "+value)
}
