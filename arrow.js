function add(n1,n2){
    return n1+n2
}
//function expression
const add2=function add2(n1,n2){
    return n1+n2
}

//function expression (anonymous)
const add3=function(n1,n2){
    return n1+n2
}
//arrow function
const add4=(n1,n2)=>n1*n2 

const name=()=>console.log('mak')
const cal=(n1,n2)=>{
    const s=n1+n2
    const diff=n1-n2
    const r=s*diff
    return r
}

const s2=add2(4,5)
const s3=add3(5,9)
const s4=add4(11,3)
const s=add(2,3)
const t=cal(12,6)
name()
console.log(s,s2,s3,s4,t)