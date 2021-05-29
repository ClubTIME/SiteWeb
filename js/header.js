function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "") {
        x.className += "responsive";
    } else {
        x.className = "";
    }
}

function redirectAccueil() {
    window.location.href = "accueil.html"
}