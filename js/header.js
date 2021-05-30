function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "headerAccueil") {
        x.className += " responsive";
    } else {
        x.className = "headerAccueil";
    }
}

function redirectAccueil() {
    window.location.href = "accueil.html"
}