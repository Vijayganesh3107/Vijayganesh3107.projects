var str="";
function generateRandomNumber(){

    str+=(Math.floor(Math.random()*(9-0))+0).toString();
   if(str.length<8)
    generateRandomNumber();
       
    
    
    
}
generateRandomNumber();
console.log(`The Gnerated random number is ${str}`);





























