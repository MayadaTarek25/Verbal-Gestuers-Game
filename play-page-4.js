var category3=localStorage.getItem("category2");
localStorage.setItem("category3",`${category3}`);
console.log(category3);
var level2=localStorage.getItem("level1");
localStorage.setItem("level2",`${level2}`);
console.log(level2);
var character1=0;
var audio11= document.getElementById("audio1");
var textbox4=localStorage.getItem("textbox3")
localStorage.setItem("textbox4",`${textbox4}`)

var monkeybutton= document.getElementById("monkeychoose");

var ostrichbutton= document.getElementById("ostrichchoose");

monkeybutton.addEventListener("click",playButtonSound1);
ostrichbutton.addEventListener("click",playButtonSound2);

function playButtonSound1() {
    audio11.play();
    localStorage.setItem("character1",0);
}
function playButtonSound2() {
    audio11.play();
    localStorage.setItem("character1",1);
}
