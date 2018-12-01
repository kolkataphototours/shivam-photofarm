
let infopop = document.getElementById("infopop");
let sworkspop = document.getElementById("sworkspop");

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openInfo() {
    if (infopop.style.display == "none" || infopop.style.display == "") {
        infopop.style.display = "block"
    } else {
        infopop.style.display = "none"
    }
}

function openSworks() {
    if (sworkspop.style.display == "none" || sworkspop.style.display == "") {
        sworkspop.style.display = "block"
    } else {
        sworkspop.style.display = "none"
    }
}
