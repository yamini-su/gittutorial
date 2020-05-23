var menu=document.getElementById("menu");
var nav=document.getElementById("nav")
var exit=document.getElementById("exist");

menu.addEventListener('click',function(e){
    nav.classList.toggle("hide-mobile")
})

exit.addEventListener('click',function(e){
    nav.classList.add("hide-mobile")
})