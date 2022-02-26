const n=[1,9,2,3,4]
// console.log(n)
// console.log(...n)
const max=Math.max(2,4,9)
const maxInArray=Math.max(...n)//array to spread then max
console.log(max)
console.log(maxInArray)

const n2=[...n]
n.push(11,33)
console.log(n2)
console.log(n)