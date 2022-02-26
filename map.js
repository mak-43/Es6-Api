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

const frnd=['tom hanks','tom cruise','tom brady','tom solaiman']
const fLengths=frnd.map(f=>f.length)
//console.log(fLengths)

const products=[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:1150,color:'black'},
    {name:'smart watch',price:3050,color:'pink'},
    {name:'sticky note',price:150,color:'black'},
    {name:'water glass',price:5,color:'white'},
]

const pName=products.map(p=>p.name)//map returns an array 
console.log(pName)
///when don't need function return value we use forEach
//products.forEach(p=>console.log(p.price))