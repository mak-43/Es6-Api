class TeamMember{
    name;
    
    address='BD';
    constructor(name,address){
        this.name=name;
        this.address=address;

    }
}

class Support extends TeamMember {
    grpSprtTime;
    designation='support web dev';
    constructor(name,address,time){
        super(name,address)
        this.grpSprtTime=time
    }
    startSession(){
        console.log(this.name,'start a support session')
    }
}

class StudentCare extends TeamMember{

    designation='Student care  dev';
    buildAroutine(student){
        console.log(this.name,'Buil a routine for ',student)
    }

}
class NeptuneDev extends TeamMember{
    
    codeEditor;
    designation='NeptuneDev  dev';
    constructor(name,address,editor){
        super(name,address)
        
        this.codeEditor=editor
    }
    releaseApp(version){
        console.log(this.name,'Release app version ',version)
    }
}

const amir=new Support('amir khan','India',11)
const shahruk=new Support('SRK khan','Gana',12)
const akk=new Support('AKKHAOY khan','nigeria',6)
const salman=new Support('saalman khan','Dhubai',8)

const alia=new StudentCare('alia bhatt','Mumbai')
const ash=new NeptuneDev('ash','tamil','android studio')
console.log(ash.name)
alia.buildAroutine('Ranbir')
ash.releaseApp("1.2.3")

const s=ash.__proto__.__proto__.__proto__
console.log(s)
