let rand1 = Math.floor(Math.random()*6)+1;
let die1_name = "images/dice"+rand1+".png";

let img1_location=document.querySelectorAll("img")[0];
img1_location.setAttribute("src",die1_name);

let rand2 = Math.floor(Math.random()*6)+1;
let die2_name = "images/dice"+rand2+".png";
let img2_location=document.querySelectorAll("img")[1];
img2_location.setAttribute("src",die2_name);

if(rand1>rand2){
    document.querySelector("h1").innerHTML="Player 1 wins";
} else if(rand1<rand2){
    document.querySelector("h1").innerHTML="Player 2 wins";
} else{
    document.querySelector("h1").innerHTML="DRAW";
}