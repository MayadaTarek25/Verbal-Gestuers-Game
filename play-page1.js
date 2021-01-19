var textbox= document.getElementById("textbox");
textbox.addEventListener("blur",savevalue)
function savevalue(){
    var name=textbox.value;
    console.log("hi",name);
    localStorage.setItem("name",`${name}`)
}


