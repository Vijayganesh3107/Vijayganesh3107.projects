console.log("hello");
var sessiondata = localStorage.getItem("JWToken");

var email = sessiondata.split("Email")[1];
var token = sessiondata.split("Email")[0];
console.log("Email:", email);

async function Auth() {
  var bodydata = { email: email };
  var p = document.getElementById("p");
  var req = await fetch(`http://localhost:3000/users/auth/${email}`, {
    method: "PUT",
    body: JSON.stringify(bodydata),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  var data = await req.json();

  if (data.message == "User Account successfully activated") {
    p.innerHTML = "User Account successfully activated";
    location.href = "login.html";
  } else {
    p.innerHTML = "User account is already activated";
  }
}

Auth();
