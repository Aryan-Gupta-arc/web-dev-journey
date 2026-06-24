
const arr = [0 ,1 ,2 ,3,5,7,8,9]

arr.push(101)

//console.log(arr)
//console.log(arr.includes(2))
//console.log(arr.indexOf(1001))


//console.log(arr2)

console.log("A  " , arr.join(","))
const arr3 = arr.slice(1,2)
console.log(arr3)

console.log("B  " , arr.join(","))
const arr4 = arr.splice(1,7).join(",")
console.log(arr4)
console.log(arr.join(","))