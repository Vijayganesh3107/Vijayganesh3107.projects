var f = fetch("https://restcountries.eu/rest/v2/all");
var str = "";
f.then((request) => {
  return request.json();
})
  .then((data) => {
    var len = data.length;
    var cont = document.createElement("div");
    cont.setAttribute("class", "container justify-content-xl-center");
    for (let i = 0; i < Math.ceil(len / 3); i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "row mb-2");
      for (let j = i * 3; j < i * 3 + 3; j++) {
        if (j < 250) {
          var divcard1 = document.createElement("div");
          divcard1.setAttribute("class", "card");
          divcard1.classList.add("col-xl-3");
          divcard1.classList.add("col-lg-3");
          divcard1.classList.add("col-md-3");
          divcard1.classList.add("offset-xl-1");
          divcard1.classList.add("offset-lg-1");
          divcard1.classList.add("offset-md-1");
          divcard1.classList.add("col-sm-12");
          divcard1.classList.add("mb-sm-5");
          divcard1.classList.add("col-xs-12");
          divcard1.classList.add("mb-xs-5");
          divcard1.classList.add("col-12");
          divcard1.classList.add("mb-5");
          var divincard = document.createElement("div");
          divincard.setAttribute("class", "container mt-xl-3");
          var countrynamep = document.createElement("p");
          countrynamep.innerHTML = `${j + 1}.)${data[j].name}`;
          divincard.appendChild(countrynamep);
          var divimg = document.createElement("div");
          divimg.setAttribute("class", "image");
          divimg.classList.add("mb-xl-5");
          divimg.classList.add("mb-lg-5");
          divimg.classList.add("mb-md-5");
          divimg.classList.add("mb-sm-5");
          divimg.classList.add("mb-xs-5");
          var img = document.createElement("img");
          img.setAttribute("class", "flag");
          img.src = `${data[j].flag}`;
          divimg.appendChild(img);
          divincard.appendChild(divimg);
          var capitalp = document.createElement("p");
          capitalp.innerHTML = `Capital :${data[j].capital}`;
          divincard.appendChild(capitalp);
          var currencyp = document.createElement("p");
          if (data[j].currencies.length > 1) {
            currencyp.innerHTML = `Currency: ${data[j].currencies[0].name} ,${data[j].currencies[1].name} etc..`;
          } else {
            currencyp.innerHTML = `Currency: ${data[j].currencies[0].name}`;
          }
          divincard.appendChild(currencyp);
          var populationp = document.createElement("p");
          populationp.innerHTML = `Population: ${data[j].population}`;
          divincard.appendChild(populationp);
          var btn = document.createElement("button");
          btn.setAttribute("class", "btn-success mt-1");
          btn.innerHTML = "Get Wheather";
          btn.style.borderRadius = "5px";
          //   btn.style.width = "100px";
          btn.addEventListener("click", () => {
            var key = "60f30cfc2b59a80d13cec75b84a3db7d";
            var latlong = data[j].latlng;
            var lat = latlong[0];
            var long = latlong[1];
            var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
            fetch(url)
              .then((request) => {
                return request.json();
              })
              .then((data1) => {
                if (data1.weather[0].main == "Clouds")
                  alert(
                    `The Weather is cloudy with ${
                      data1.weather[0].description
                    } and the Current Temprature is ${Math.ceil(
                      data1.main.temp - 273
                    )} Deg C`
                  );
                else {
                  alert(
                    `The Weather is ${data1.weather[0].main} with ${
                      data1.weather[0].description
                    } and the Current Temprature is ${Math.ceil(
                      data1.main.temp - 273
                    )}Deg C`
                  );
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
          divincard.appendChild(btn);
          divcard1.appendChild(divincard);
          div.appendChild(divcard1);
        }
      }
      cont.appendChild(div);
      document.body.append(cont);
    }
  })
  .catch((error) => console.log(error));
