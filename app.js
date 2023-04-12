theMenu = document.querySelector(".menu");
theMenu.onclick = function(){
    navbar = document.querySelector(".links");
    navbar.classList.toggle("active");
}


function donateMoney(){
    window.location.href = "https://conserveturtles.org/support-stc-make-a-donation-to-stc"
}
function adoptTurtle(){
    window.location.href = "https://conserveturtles.org/support-stc-join-stc-and-adopt-a-turtle/"
}