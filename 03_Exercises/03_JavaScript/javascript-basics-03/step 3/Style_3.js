var a = document.querySelector('.green');
var b = document.querySelector('.red');
var c = document.querySelector('.blue');
function clicks() {

    a.addEventListener("click", () => {

        document.querySelector("p").style.color = "green";
    })

    b.addEventListener("click", () => {
        document.querySelector("p").style.color = "red";
    })
    c.addEventListener("click", () => {
        document.querySelector("p").style.color = "blue";
    })
}