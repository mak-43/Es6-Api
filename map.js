const n=[4,6,7,8,1,9]
const o=[]
function doubleOld(n){
    return n*2
}

const doubleIt=n=>n*2

for(const i of n){
    const r=doubleIt(i)
    o.push(r)
}
//console.log(o)
//solution
//const output=n.map(doubleIt)
const output=n.map(n=>n*2)
//console.log(output)

const frnd