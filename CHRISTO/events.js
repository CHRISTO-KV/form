function popUp(){
    alert("you have clicked me!!")
}

var btn=document.getElementById("myBtn");
btn.addEventListener("click",function() {
    btn.textContent="changed"
    
})

var idl=document.getElementById("idl")
function changecolor(){
idl.style.backgroundColor="yellow"
}
function hide(){
    idl.style.backgroundColor="white"
}