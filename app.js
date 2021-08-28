var colorHeading = document.getElementById("color");
var body = document.querySelector("body");
var btn = document.getElementById("btn");



btn.addEventListener("click",changeBackground);

function changeBackground(){

    var random1 = Math.floor((Math.random() * 250) + 1);
    var random2 = Math.floor((Math.random() * 250) + 1);
    var random3 = Math.floor((Math.random() * 250) + 1);
    var color = `rgb(${random1}, ${random2}, ${random3})`;

    body.style.background = color;
    btn.style.background=color;
    colorHeading.textContent = color;
}
