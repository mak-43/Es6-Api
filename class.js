 class Support{
     name;
     designation='support web dev';
     address='BD';
     constructor(name,address){
         this.name=name;
         this.address=address;

     }
     startSession(){
         console.log(this.name,'start a support session')
     }
 }

 const amir=new Support('amir khan','India')
 console.log(amir)
 amir.startSession()
 const salman=new Support('saalman khan','Dhubai')
 console.log(salman)
 salman.startSession()