window.onscroll = function () {
    myFunction()
};

var menu = document.getElementById("menu");

function myFunction() {
    console.log("Got here");
    if (window.scrollY) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}