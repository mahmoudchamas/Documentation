function test1() {
  var val = confirm("you are going to reset the form");
  if (val == true) {
    document.getElementById("name").value = null;
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  } else {
    alert("no ");
    return 0;
  }
}
