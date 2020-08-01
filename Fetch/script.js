var f = fetch("https://restcountries.eu/rest/v2/all");
var str = "";

f.then((request) => {
  return request.json();
})
  .then((data) => {
    var len = data.length;
    for (let i = 0; i < Math.ceil(len / 4); i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "row mb-5");
      for (let j = i * 4; j < i * 4 + 4; j++) {
        if (j < 250) {
          var divcard1 = document.createElement("div");
          divcard1.setAttribute("class", "card");
          divcard1.classList.add("col-xl-2");
          divcard1.classList.add("col-lg-2");
          divcard1.classList.add("col-md-2");
          divcard1.classList.add("offset-xl-1");
          divcard1.classList.add("offset-lg-1");
          divcard1.classList.add("offset-md-1");
          divcard1.classList.add("col-sm-12");
          divcard1.classList.add("mb-sm-5");
          divcard1.classList.add("col-xs-12");
          divcard1.classList.add("mb-xs-5");
          divcard1.classList.add("col-12");
          divcard1.classList.add("mb-5");

          var countrynamep = document.createElement("p");
          countrynamep.innerHTML = `${j + 1}.)${data[j].name}`;
          divcard1.appendChild(countrynamep);
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
          divcard1.appendChild(divimg);
          var capitalp = document.createElement("p");
          capitalp.innerHTML = `Capital :${data[j].capital}`;
          divcard1.appendChild(capitalp);
          var currencyp = document.createElement("p");
          if (data[j].currencies.length > 1) {
            currencyp.innerHTML = `Currency: ${data[j].currencies[0].name} ,${data[j].currencies[1].name} etc..`;
          } else {
            currencyp.innerHTML = `Currency: ${data[j].currencies[0].name}`;
          }
          divcard1.appendChild(currencyp);
          var populationp = document.createElement("p");
          populationp.innerHTML = `Population: ${data[j].population}`;
          divcard1.appendChild(populationp);
          div.appendChild(divcard1);
        }
      }
      document.body.append(div);
    }
  })
  .catch((error) => console.log(error));
