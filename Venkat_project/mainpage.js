var search=document.getElementById("search");
var searchbtn=document.getElementById("searchbtn");
var randombtn=document.getElementById("randombtn");
var displaygrid=document.getElementById("displaygrid");
var singledisplay=document.getElementById("singledisplay");
var headingdisplay=document.getElementById("headingdisplay")
var recipie=document.querySelector(".recipie")
searchbtn.addEventListener('click',()=>{

singledisplay.innerHTML='';
recipie.innerHTML=``;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
.then(req=>{
    return (req.json())
}).then(data=>{
    var len=data.meals.length;
    
    for(let i=0;i<Math.ceil(len/4);i++){
        let row=document.createElement("div");
        row.setAttribute("class","row  text-center");
        for(let j=i*4;j<i*4+4;j++){
            if(j<len){
            var carddiv=document.createElement("div");
            carddiv.setAttribute("class","carddiv col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 col-12 offset-xl-1 offset-lg-1 offset-md-1")
            carddiv.setAttribute("id",data.meals[j].idMeal);
            var divimage=document.createElement("div");
            var cardimage=document.createElement("img");
            cardimage.setAttribute("src",`${data.meals[j].strMealThumb}`);
            divimage.appendChild(cardimage);
            var h2=document.createElement("h2");
            h2.setAttribute("class","col-12 ")
            h2.innerHTML=`${data.meals[j].strMeal}`;
            carddiv.appendChild(divimage)
            carddiv.appendChild(h2);
            row.appendChild(carddiv);
            carddiv.addEventListener('click',e=>{
                singledisplay.innerHTML='';
                var id=e.currentTarget.id;
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(req=>{
                    return(req.json());
                }).then(data=>{
                    recipie.innerHTML=`Recipie for ${data.meals[0].strMeal}`
                    var carddiv=document.createElement("div");
        carddiv.setAttribute("class","carddiv offset-4 col-4 text-left justify-content-center")
        var imagediv=document.createElement("div");
        imagediv.setAttribute("class","imagediv")
        var img=document.createElement("img");
        img.setAttribute("src",`${data.meals[0].strMealThumb}`);
        imagediv.appendChild(img);
        carddiv.appendChild(imagediv);
        var mealnamediv=document.createElement("div");
        mealnamediv.setAttribute("class","mealnamediv")
        var mealtitle=document.createElement("h2")
        mealtitle.setAttribute("class","mealtitle");
        mealtitle.innerHTML=`${data.meals[0].strMeal}`
        mealnamediv.appendChild(mealtitle);
        carddiv.appendChild(mealnamediv);
        var ingreientsdiv=document.createElement("div");
        ingreientsdiv.setAttribute("class","ingreientsdiv mt-5")
        var ingp=document.createElement("p");
        


        
        let ingarr=[];
        for(let i=1;i<=20;i++){
            if(data.meals[0][`strIngredient${i}`]){
                ingarr.push(`${data.meals[0][`strIngredient${i}`]}-${data.meals[0][`strMeasure${i}`]}`)
            }
            else{
                break;
            }
        }
        ingp.innerHTML=ingarr.join(",");
        ingreientsdiv.appendChild(ingp);
        carddiv.appendChild(ingreientsdiv);
        var recipiediv=document.createElement("div");
        recipiediv.setAttribute("class","recipiediv mt-5")
        var recipiep=document.createElement("p");
        recipiep.innerHTML=`${data.meals[0].strInstructions}`;
        recipiediv.appendChild(recipiep);
        carddiv.appendChild(recipiediv);
        singledisplay.appendChild(carddiv);
                    
                })
            })
            }
            
        }
        displaygrid.appendChild(row);
    }
    
headingdisplay.innerHTML=`The meal searched is ${search.value}`



}).catch(err=>{
    headingdisplay.innerHTML=`No data found`
})

displaygrid.innerHTML=''
})



randombtn.addEventListener('click',()=>{
    displaygrid.innerHTML=''
    headingdisplay.innerHTML=''
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(req=>{
        return (req.json());
    }).then(data=>{
        recipie.innerHTML=` Recipie for ${data.meals[0].strMeal}`
        var carddiv=document.createElement("div");
        carddiv.setAttribute("class","carddiv offset-4 col-4 text-left")
        var imagediv=document.createElement("div");
        imagediv.setAttribute("class","imagediv")
        var img=document.createElement("img");
        img.setAttribute("src",`${data.meals[0].strMealThumb}`);
        imagediv.appendChild(img);
        carddiv.appendChild(imagediv);
        var mealnamediv=document.createElement("div");
        mealnamediv.setAttribute("class","mealnamediv")
        var mealtitle=document.createElement("h2")
        mealtitle.setAttribute("class","mealtitle");
        mealtitle.innerHTML=`${data.meals[0].strMeal}`
        mealnamediv.appendChild(mealtitle);
        carddiv.appendChild(mealnamediv);
        var ingreientsdiv=document.createElement("div");
        ingreientsdiv.setAttribute("class","ingreientsdiv  mt-5")
        var ingp=document.createElement("p");
        


        
        let ingarr=[];
        for(let i=1;i<=20;i++){
            if(data.meals[0][`strIngredient${i}`]){
                ingarr.push(`${data.meals[0][`strIngredient${i}`]}-${data.meals[0][`strMeasure${i}`]}`)
            }
            else{
                break;
            }
        }
        ingp.innerHTML=ingarr.join(",");
        ingreientsdiv.appendChild(ingp);
        carddiv.appendChild(ingreientsdiv);
        var recipiediv=document.createElement("div");
        recipiediv.setAttribute("class","recipiediv mt-5")
        var recipiep=document.createElement("p");
        recipiep.innerHTML=`${data.meals[0].strInstructions}`;
        recipiediv.appendChild(recipiep);
        carddiv.appendChild(recipiediv);
        singledisplay.appendChild(carddiv);

        


    })
    
    singledisplay.innerHTML=''
})