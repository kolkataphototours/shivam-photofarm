
let infopop = document.getElementById("infopop");
let sworkspop = document.getElementById("sworkspop");
let horizontalScroll = document.getElementsByClassName("horizontal-scroll");
let upButton = document.getElementsByClassName("upButton");

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

function showText(i) {
    console.log(upButton[i].parentNode.children[1].style.display);
    if (upButton[i].parentNode.children[1].style.display == "none" || upButton[i].parentNode.children[1].style.display == "") {
        upButton[i].parentNode.children[1].style.display = "block";
        upButton[i].innerHTML = "▼";
        upButton[i].style.background = "rgba(10, 10, 10, 0.1)";
    } else {
        upButton[i].parentNode.children[1].style.display = "none";
        upButton[i].innerHTML = "▲";
        upButton[i].style.background = "rgba(220, 220, 220, 0.4)";
    }
}


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //console.log("left")
            break;
        case 38:
            //console.log("up")
            break;
        case 39:
            //console.log("down")
            break;
        case 40:
            //console.log("right")
            break;
    }
};

document.body.requestFullscreen();
