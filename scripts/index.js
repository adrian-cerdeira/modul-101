//Um ein responsive Menü zu haben
function responsiveNav() {

    var navigation = document.getElementById("mainNav");

    if (navigation.className === "nav") {
        navigation.className += " responsive";
    }

    else {
        navigation.className = "nav";
    }

}

function responsiveSecondNav() {

    var navigation = document.getElementById("secondNav");

    if (navigation.className === "sub-nav") {
        navigation.className += " responsive";
    }

    else {
        navigation.className = "sub-nav";
    }
}





