function myFunction() {
  var x = document.getElementById("pwd");
  var y = document.getElementById("pwdc");

  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}
