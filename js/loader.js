// var load = document.querySelector(".loader");

window.onload = function() {
    window.setTimeout(loading, 3000);
}

function loading() {
    document.querySelector(".loader").style.display = "none";
}