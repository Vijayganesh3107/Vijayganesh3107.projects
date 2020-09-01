
setInterval(getRatio,1000);

const hourHand=document.querySelector(".hour")
const minHand=document.querySelector(".min")
const secHand=document.querySelector(".sec")

function getRatio(){

  const curdate=new Date()
  const secondsRatio=curdate.getSeconds()/60;
  const minutesRatio=(secondsRatio +curdate.getMinutes())/60;
  const hoursRatio=(minutesRatio+curdate.getHours())/12;
setRatio(secHand,secondsRatio);
setRatio(minHand,minutesRatio);
setRatio(hourHand,hoursRatio);

}

function setRatio(element,rotationRatio){
  element.style.setProperty("--rotation",rotationRatio*360);
}

getRatio();