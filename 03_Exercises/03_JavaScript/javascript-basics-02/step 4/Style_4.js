

function test() {
    var x = confirm("Are you sure you want to reset all text?");
    if (x == true) {
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("city").value = "";
    }
}