var submitbtn = document.querySelector("#submitbtn");
var password = document.getElementById("password");
var email = document.getElementById("email");
var name = document.getElementById("name");
var repassword = document.getElementById("re-password");
var alert1 = document.querySelector(".alert1");
var alert2 = document.querySelector(".alert2");
var alert3 = document.querySelector(".alert3");
submitbtn.addEventListener("click", () => {
  if (password.value !== repassword.value) {
    alert1.classList.remove("displaynone");
    alert2.classList.add("displaynone");
  } else {
    if (password.value == "" && repassword.value == "") {
      alert2.classList.remove("displaynone");
      alert1.classList.add("displaynone");
    } else {
      RegisterUser();
      alert1.classList.add("displaynone");
      //   location.href = "login.html";
    }
  }
});

async function RegisterUser() {
  var bodydata = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  var req = await fetch("http://localhost:3000/users/register", {
    method: "POST",
    body: JSON.stringify(bodydata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  var data = await req.json();
  var token = data.token;

  if (data.message != "User Already with same Registered Email-ID") {
    alert3.classList.remove("displaynone");
    localStorage.setItem("JWToken", `${token}Email${email.value}`);
    location.href = "auth.html";
  }
}
