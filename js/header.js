function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "headerAccueil") {
        x.className += " responsive";
    } else {
        x.className = "headerAccueil";
    }

    var tagMain = document.getElementsByTagName("main")[0];
    if (x.className === "headerAccueil responsive") {
        tagMain.style.marginTop = "300px";
    } else {
        tagMain.style.marginTop = "80px";
    }
}

function redirectAccueil() {
    window.location.href = "accueil.html"
}