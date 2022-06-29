let container = document.querySelector(".container");
let jp = document.querySelector(".jackpot");
let btn = document.getElementById("spin");
//let starting_point = 22 //what position we default start
let no_spins = Math.ceil(Math.random()*1) * 360 + (360 * 6);
let last_spin = Math.ceil(Math.random() * 360)+no_spins; //spin a random degree from 0 to 1000

let won_yet = false     //if sth happens and the program resets change this value manually!! example browser closes
let jackpot_from = 346   //where begins the jackpot
let jackpot_to = 14    //where ends the jackpot (added a bit more jsut in case it stops in the middle)

let audio = new Audio("147239759.mp3")

document.addEventListener("click",clickchecker);

window.onkeydown = function(event){
    if(event.keyCode === 32 && won_yet == true) {
        event.preventDefault();
        won_yet = false;
        jp.style.display="none";
    }
    else if (event.keyCode === 32 && won_yet == false) {
        event.preventDefault();
        won_yet = true;
        jp.style.display="flex";
    }

};

function clickchecker(){
    btn.click();
}

btn.onclick = function(){
    //prize has been won
    btn.disabled = true
    audio.play()
    btn.style.background='#000000'
    setTimeout(function(){btn.disabled = false;btn.style.background='#a2a2a2'},5000);
    while(won_yet && (last_spin%360>jackpot_from || last_spin%360<=jackpot_to)){
        last_spin -= 360;
        last_spin += Math.ceil(Math.random () * 360);
        console.log("no no no")
    }
    //winning condition (jackpot)
    if(!won_yet && ((last_spin)%360>jackpot_from || (last_spin)%360<=jackpot_to)){
        console.log("won");
    }
    container.style.transform = "rotate(" +  last_spin+ "deg)"; //rotate the wheel
    console.log(last_spin%360)

    no_spins = Math.ceil(Math.random()*1) * 360 + (360 * 6);
    last_spin += no_spins + Math.ceil(Math.random () * 360);

    if (won_yet == true){
        jp.style.display="flex";
    }
}


