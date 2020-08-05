var input = document.querySelector("input");
var btn = document.getElementById("btn");

async function getIMDMData() {
  try {
    var input = document.querySelector("input");
    var movie = input.value;
    var url = `https://www.omdbapi.com/?t=${movie}&apikey=abb0934`;
    var request = await fetch(url);
    var moviejson = await request.json();
    var display = document.getElementById("display");
    display.classList.remove("displaynone");
    display.classList.add("dipslaydiv");
    display.classList.add("col-xl-12");
    var movieNamep = document.getElementById("moviename");
    movieNamep.innerHTML = `<b>${moviejson.Title.toUpperCase()}</b>`;
    movieNamep.style.textAlign = "center";
    var image = document.querySelector("#image");
    image.src = moviejson.Poster;
    var directorp = document.getElementById("director");
    directorp.innerHTML = `Director: ${moviejson.Director}`;
    var movieCastp = document.getElementById("cast");
    movieCastp.innerHTML = `Cast : ${moviejson.Actors}`;
    var leanguagep = document.getElementById("language");
    leanguagep.innerHTML = `Language : ${moviejson.Language}`;
    var runtime = document.getElementById("runtime");
    runtime.innerHTML = `Runtime: ${moviejson.Runtime}`;
    var release = document.getElementById("release");
    release.innerHTML = `Release Date : ${moviejson.Released}`;
    var imdb = document.getElementById("Imdb");
    imdb.innerHTML = `IMDB Rating : ${moviejson.imdbRating}`;
    var h11 = document.querySelector("h1");
    h11.classList.add("displaynone");
  } catch {
    if (moviejson.Title == null || moviejson.Title == undefined) {
      display.classList.add("displaynone");

      var h1 = document.querySelector("h1");
      h1.classList.remove("displaynone");
    }
    // h1.classList.add("displaynone");
  }
}

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    getIMDMData();
  }
});
btn.addEventListener("click", () => {
  getIMDMData();
});
