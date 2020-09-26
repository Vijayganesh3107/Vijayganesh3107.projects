var tbody = document.getElementById("tbody");
var h3 = document.querySelector(".displaynone");
document.getElementById("searchbtn").addEventListener("click", () => {
  DataInsert();

  // window.open("http://127.0.0.1:5500/index.html", "_self");
});
window.addEventListener("load", () => {
  insertAll();
});

async function insertAll() {
  var data = await fetch("http://localhost:3000/longURL");

  var result = await data.json();
  let len = result.length;
  for (let i = 0; i < len; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.setAttribute("id", `${result[i].longURL}`);
    var alongUrl = document.createElement("a");
    alongUrl.href = `${result[i].longURL}`;
    alongUrl.innerHTML = result[i].longURL;
    td1.appendChild(alongUrl);
    tr.appendChild(td1);
    var td2 = document.createElement("td");
    td2.setAttribute("id", `shorturl-${result[i].shortURL}`);
    var ashortUrl = document.createElement("a");
    ashortUrl.addEventListener("click", () => {
      UpdateCount(result[i].longURL);
      location.href = result[i].longURL;
    });
    ashortUrl.innerHTML = result[i].shortURL;
    td2.appendChild(ashortUrl);
    tr.appendChild(td2);
    var td3 = document.createElement("td");
    td3.setAttribute("id", `count-${result[i].shortURL}`);
    td3.innerHTML = result[i].clicked;
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
}

async function DataInsert() {
  try {
    var data1 = { longURL: `${document.getElementById("longurl").value}` };
    var req = await fetch("http://localhost:3000/longURL", {
      method: "POST",
      body: JSON.stringify(data1),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await req.json();
    if (data.message == "Data Inserted") {
      GetLinks();
    } else {
      h3.innerHTML = data.message;
    }
  } catch (error) {
    console.log(error);
  }
}

async function GetLinks() {
  var data = await fetch("http://localhost:3000/longURL");
  var result = await data.json();
  let len = result.length;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.setAttribute("id", `${result[len - 1].longURL}`);
  var alongUrl = document.createElement("a");
  alongUrl.href = `${result[len - 1].longURL}`;
  alongUrl.innerHTML = result[len - 1].longURL;
  td1.appendChild(alongUrl);
  tr.appendChild(td1);
  var td2 = document.createElement("td");
  td2.setAttribute("id", `shorturl-${result[len - 1].shortURL}`);
  var ashortUrl = document.createElement("a");
  ashortUrl.href = `${result[len - 1].longURL}`;
  ashortUrl.innerHTML = result[len - 1].shortURL;
  td2.appendChild(ashortUrl);
  tr.appendChild(td2);

  ashortUrl.addEventListener("click", () => {
    UpdateCount(result[len - 1].longURL);
  });
  var td3 = document.createElement("td");
  var p = document.createElement("p");
  p.setAttribute("id", `count-${result[len - 1].clicked}`);
  p.innerHTML = result[len - 1].clicked;
  td3.appendChild(p);
  tr.appendChild(td3);
  tbody.appendChild(tr);
}

async function UpdateCount(longurl) {
  try {
    var bodydata = { longURL: longurl };
    var res = await fetch("http://localhost:3000/longURL", {
      method: "PUT",
      body: JSON.stringify(bodydata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await res.json();

    if (data.message == "Data Updated") {
      tbody.innerHTML = ``;
      insertAll();
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}
