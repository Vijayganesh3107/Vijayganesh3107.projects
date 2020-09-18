var submitbtn=document.querySelector("#submitbtn");
var password=document.getElementById("password");
var repassword=document.getElementById("re-password");
var alert1=document.querySelector(".alert1")
var alert2=document.querySelector(".alert2")
submitbtn.addEventListener("click",()=>{
    if((password.value!==repassword.value)){
        alert1.classList.remove("displaynone");
        alert2.classList.add("displaynone")
    }
    else{
        if((password.value=="") && (repassword.value=="")){
            alert2.classList.remove("displaynone")
            alert1.classList.add("displaynone")
        }
        else{
        alert1.classList.add("displaynone")
        location.href="login.html"
        }
        
    }
})
