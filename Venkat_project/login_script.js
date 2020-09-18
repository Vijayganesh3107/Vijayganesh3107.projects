var button = document.querySelector("#loginbtn");
var password = document.getElementById("password");
var link = document.getElementById("forgotpassowrd");
function ChangeBorderColor() {
  let user = document.getElementById("username");
  var password = document.getElementById("password");
  user.addEventListener("change", () => {
    if (user.value === "admin") {
      user.style.borderColor = "YellowGreen";
    } else if (user.value === "") {
      user.style.borderColor = "Black";
    } else {
      user.style.borderColor = "Red";
    }
  });
  password.addEventListener("change", () => {
    if (password.value === "admin") {
      password.style.borderColor = "YellowGreen";
    } else if (password.value === "") {
      password.style.borderColor = "Black";
    } else {
      password.style.borderColor = "Red";
    }
  });
}
ChangeBorderColor();
function CredValidation() {
  let user = document.querySelector("#username");
  let userValue = user.value;
  let passwordValue = password.value;
  if (userValue == "admin" && passwordValue == "admin") return true;
  return false;
}
button.addEventListener("click", () => {
  if (CredValidation()) {
    location.href = "mainpage.html";
  } else {
    if (!alert("Invalid Credentials.Please try with new Credentials")) {
      window.location.reload();
    }
  }
});
link.style.textDecoration = "none";
link.addEventListener("click", () => {
  if (!alert("password reset Link has been sent to adm***@*****.com")) {
    window.location.reload();
  }
});
password.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (CredValidation()) {
      location.href = "mainpage.html";
    } else {
      if (!alert("Invalid Credentials.Please try with new Credentials")) {
        window.location.reload();
      }
    }
  }
});
