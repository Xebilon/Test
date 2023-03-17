var menuOpen = false;
var btnToggle = document.getElementById("btn-toggle");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");

function toggleMenu() {
    btnToggle.classList.toggle('active');
    if(menuOpen===false) {
        first.style.transform = "translateX(-82px)";
        second.style.transform = "translateX(-41px) translateY(-62px)";
        third.style.transform = "translateX(41px) translateY(-62px)";
        fourth.style.transform = "translateX(82px)";
    }
    else {
        btnToggle.className.replace( /(?:^|\s)active(?!\S)/g , '' );
        first.style.transform = "translateX(0px)";
        second.style.transform = "translateX(0px) translateY(0px)";
        third.style.transform = "translateX(0px) translateY(0px)";
        fourth.style.transform = "translateX(0px)";
    }
    menuOpen = !menuOpen;
}
