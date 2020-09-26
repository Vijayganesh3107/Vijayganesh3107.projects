var btn = document.getElementById("loginbtn");

btn.addEventListener("click", () => {
  Login();
});

async function Login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var bodydata = {
    email: email.value,
    password: password.value,
  };
  var res = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(bodydata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  var data = await res.json();
  if (data.message == "success") {
    localStorage.setItem("Email", data.email);
    location.href = "dashboard.html";
  } else {
    alert(data.message);
  }
}
