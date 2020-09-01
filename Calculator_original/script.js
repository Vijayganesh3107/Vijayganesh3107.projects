// var main_container=document.createElement("div");
// main_container.setAttribute("class","calculator-main");
// var display=document.createElement("div");
// display.setAttribute("class","display");
// var Previousdisplay=document.createElement("div");
// Previousdisplay.setAttribute("class","PreviousDisplay");
// Previousdisplay.setAttribute("id","previousDisplay");
// var CurrentDisplay=document.createElement("div");
// CurrentDisplay.setAttribute("class","CurrentDisplay");
// CurrentDisplay.setAttribute("id","currentDisplay");
// display.appendChild(Previousdisplay);
// display.appendChild(CurrentDisplay);
//  main_container.appendChild(display);
// var btn_1=document.createElement("button");
// btn_1.setAttribute("class","col-2 Clear")
// btn_1.innerHTML="AC"
// var btn_2=document.createElement("button");
// btn_2.setAttribute("class","delete");
// btn_2.innerHTML="Del"
// var btn_3=document.createElement("button");
// btn_3.setAttribute("class","operations")
// btn_3.innerHTML="/"
// var btn_4=document.createElement("button");
// btn_4.setAttribute("class","operations");
// btn_4.setAttribute("id","rspc");
// var sup1=document.createElement("sup");
// sup1.innerHTML="-1";
// btn_4.appendChild(sup1);
// var btn_5=document.createElement("button");
// btn_5.setAttribute("class","numbers")
// btn_5.innerHTML="1";
// var btn_6=document.createElement("button");
// btn_6.setAttribute("class","numbers")
// btn_6.innerHTML="2";
// var btn_7=document.createElement("button");
// btn_7.setAttribute("class","numbers")
// btn_7.innerHTML="3";
// var btn_8=document.createElement("button");
// btn_8.setAttribute("class","operations")
// btn_8.innerHTML="*";
// var btn_9=document.createElement("button");
// btn_9.setAttribute("class","operations")
// btn_9.innerHTML="%";
// var btn_10=document.createElement("button");
// btn_10.setAttribute("class","operations");
// btn_10.setAttribute("id","croot");
// btn_10.innerHTML="&#8731";
// var btn_11=document.createElement("button");
// btn_11.setAttribute("class","numbers")
// btn_11.innerHTML="4";
// var btn_12=document.createElement("button");
// btn_12.setAttribute("class","numbers")
// btn_12.innerHTML="5";
// var btn_13=document.createElement("button");
// btn_13.setAttribute("class","numbers")
// btn_13.innerHTML="6";
// var btn_14=document.createElement("button");
// btn_14.setAttribute("class","operations")
// btn_14.innerHTML="+";
// var btn_15=document.createElement("button");
// btn_15.setAttribute("class","operations")
// btn_15.innerHTML="^";
// var btn_16=document.createElement("button");
// btn_16.setAttribute("class","operations disabled1");
// btn_16.style.disabled="true";
// var btn_17=document.createElement("button");
// btn_17.setAttribute("class","numbers")
// btn_17.innerHTML="7";
// var btn_18=document.createElement("button");
// btn_18.setAttribute("class","numbers")
// btn_18.innerHTML="8";
// var btn_19=document.createElement("button");
// btn_19.setAttribute("class","numbers")
// btn_19.innerHTML="9";
// var btn_20=document.createElement("button");
// btn_20.setAttribute("class","operations")
// btn_20.innerHTML="-";
// var btn_21=document.createElement("button");
// btn_21.setAttribute("class","operations");
// btn_21.setAttribute("id","sroot");
// btn_21.innerHTML="&#8730";
// var btn_22=document.createElement("button");
// btn_22.setAttribute("class","operations disabled1");
// btn_22.style.disabled="true";
// var btn_23=document.createElement("button");
// btn_23.setAttribute("class","numbers")
// btn_23.innerHTML=".";
// var btn_24=document.createElement("button");
// btn_24.setAttribute("class","numbers")
// btn_24.innerHTML="0";
// var btn_25=document.createElement("button");
// btn_25.setAttribute("class","col-2 Equals")
// btn_25.innerHTML="=";

// main_container.appendChild(btn_1);
// main_container.appendChild(btn_2);
// main_container.appendChild(btn_3);
// main_container.appendChild(btn_4);
// main_container.appendChild(btn_5);
// main_container.appendChild(btn_6);
// main_container.appendChild(btn_7);
// main_container.appendChild(btn_8);
// main_container.appendChild(btn_9);
// main_container.appendChild(btn_10);
// main_container.appendChild(btn_11);
// main_container.appendChild(btn_12);
// main_container.appendChild(btn_13);
// main_container.appendChild(btn_14);
// main_container.appendChild(btn_15);
// main_container.appendChild(btn_16);
// main_container.appendChild(btn_17);
// main_container.appendChild(btn_18);
// main_container.appendChild(btn_19);
// main_container.appendChild(btn_20);
// main_container.appendChild(btn_21);
// main_container.appendChild(btn_22);
// main_container.appendChild(btn_23);
// main_container.appendChild(btn_24);
// main_container.appendChild(btn_25);
// document.body.appendChild(main_container);

class Calculator2{
    constructor(previousDisplayElement,currentDisplayElement){
        this.previousDisplayElement=previousDisplayElement;
        this.currentDisplayElement=currentDisplayElement;
        this.clear();
    }

    clear(){
        this.previousvalue="";
        this.currentvalue="";
        this.operation="";
    }
    appendnumber(no){

        if(this.currentvalue=='' && no==='.')
        this.currentvalue="0.";
        if(this.currentvalue.includes('.')&&no==='.') return
        if(this.currentvalue==='0')
        this.currentvalue=no.toString();
        else
        this.currentvalue=this.currentvalue.toString() + no.toString();


    }
    updatecalulator(){
       this.currentDisplayElement.innerHTML=this.currentvalue;
       if(this.operation!=null && this.previousvalue!="")
       {
       this.previousDisplayElement.innerHTML=this.previousvalue.toString()+ this.operation;

       }
       else{
        this.previousDisplayElement.innerHTML=""; 
       }

    }
    evaluvate(operation){
        if(this.currentvalue==='')return
        
        
        if(this.previousvalue!= ''){
            this.compute();
        }
        this.operation=operation;
       
        this.previousvalue=this.currentvalue;
        this.currentvalue="";
    
}
    compute(){
        var result;
        var op=this.operation;
        if(this.previousvalue=="") return
        if(op==='+')
        {
            result=+this.previousvalue+ +this.currentvalue;
        }
        else if(op==='-'){
            result=+this.previousvalue- +this.currentvalue;
        }
        else if(op==='*'){
            result=+this.previousvalue* +this.currentvalue;
        }
        else if(op==='/')
        {
            if(this.currentvalue==0){
                result="Cannot Divide by zero";
            }
            else
            result=+this.previousvalue/ +this.currentvalue;

        }
        else if(op==='^'){
            result=Math.pow(this.previousvalue,this.currentvalue);
        }
        if(op==='%'){
            this.currentvalue=0.01;
            result=this.previousvalue*this.currentvalue;
        }

        if(op===document.getElementById('sroot').innerHTML){
            result=Math.sqrt(this.previousvalue);
            
        }
        if(op===document.getElementById("rspc").innerHTML){
            result=Math.pow(this.previousvalue,-1);
        }
        if(op===document.getElementById('croot').innerHTML){
            result=Math.pow(this.previousvalue,0.33);
        }

         


        this.currentvalue=result;
        this.previousvalue="";
        

    }

    delete(){
        var curval;
        curval=+this.currentvalue
        if(curval%1==0)
        {
        this.currentvalue=curval/10;
        this.currentvalue=this.currentvalue.toString().split('.')[0];
        }
        else{
            var integer=curval.toString().split('.')[0];
            var decimal=curval.toString().split('.')[1];
            decimal=decimal/10;
            decimal=decimal.toString().split('.')[0];
            if(decimal!=0)
            this.currentvalue=integer+'.'+decimal;
            else
            this.currentvalue=integer;


        }

    }

   

}


var previousDisplayElement=document.querySelector(".PreviousDisplay");
console.log(previousDisplayElement);
var currentDisplayElement=document.querySelector(".currentDisplay");
var numberbuttons=document.querySelectorAll(".numbers");
var operationbuttons=document.querySelectorAll(".operations");
var equalbutton=document.querySelector(".Equals");
var deletebutton=document.querySelector(".delete");
var clearbutton=document.querySelector(".Clear");



 calc= new Calculator2(previousDisplayElement,currentDisplayElement);


for(let i=0;i<numberbuttons.length;i++){
    numberbuttons[i].addEventListener('click',function(){
        calc.appendnumber(numberbuttons[i].innerHTML);
        calc.updatecalulator();
    })
}

for(let i=0;i<operationbuttons.length;i++){
    operationbuttons[i].addEventListener('click',function(){
        calc.evaluvate(operationbuttons[i].innerHTML);
        // calc.compute(operationbuttons[i].innerHTML);
        calc.updatecalulator();
    })
}

equalbutton.addEventListener('click',()=>{
    calc.compute();
    calc.updatecalulator();
})

deletebutton.addEventListener('click',()=>{

    calc.delete();
    calc.updatecalulator();
})

clearbutton.addEventListener('click',function(){
    calc.clear();
    calc.updatecalulator();
})



