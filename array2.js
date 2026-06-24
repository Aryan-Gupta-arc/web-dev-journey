const Name = ["Aryan", "Shivendra", "Divyanshu"]
const OrgName = [1,2,3]

const arr = Name.concat(OrgName)
//console.log(arr)

const arr2 = [...Name, ...OrgName]
//console.log(arr2)

const Thalla = [1,2,3,4,[5,6],7,8,[9,10,[11,12]]]
const thalla = Thalla.flat(1)

console.log(thalla)