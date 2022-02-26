const n=[5,6,2,9,10,11,55,66]
const bigNumbers=n.filter(n=>n>20) ////checking conditions and return full elements with array////
const smallNumbers=n.filter(n=>n<=10)
//console.log(smallNumbers) 
const products=[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:1150,color:'black'},
    {name:'smart watch',price:3050,color:'pink'},
    {name:'sticky note',price:150,color:'black'},
    {name:'water glass',price:5,color:'white'},
]

const expn=products.filter(p=>p.price<300)
//console.log(expn)
const color=products.find(p=>p.price<300)///return direct element and only first one///// 
console.log(color)