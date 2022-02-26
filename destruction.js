const fish={id:58, name:'king hilsha',price:9000,phone:'01500000000',address:'chandpur',dress:'silver'}
// const phone=fish.phone
// const price=fish.price
// const dress=fish.dress
// const id=fish.id

const {phone,price,id,dress}=fish
//console.log(price)

const company={
    name:'GP',
    ceo:{id:1,name:'ajmol',food:'fuchka'},
    web:{work:'website development',employee:22,framwork:'react',
       tech:{
           first:'html',second:'css',third:'js'
       } 
}
}
// const work=company.web.work;
// const framwork=company.web.framwork;

const {work,framwork}=company.web
const {food}=company.ceo
const {second,third}=company.web.tech
//console.log(work,framwork,food ,second,third)


const [best,faltu]=[45,56]
console.log(best,faltu)
////chaining
console.log(company.web.tech.third)

console.log(company.backend?.tech.third)
