let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000); //spin a random degree from 0 to 1000

btn.onclick = function(){
    container.style.transform = "rotate(" + number + "deg)"; //rotate the wheel
    number += Math.ceil(Math.random () * 1000);
}