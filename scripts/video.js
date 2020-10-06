//Video Play&Pause-Funktionen
var video = document.getElementsByTagName('video')[0]
video.addEventListener('click', playAndPause);

var click = 0;

function playAndPause() {
    click++;

    if (click == 1) {
        video.play();
        click++;
    }

    else {
        video.pause();
        click = 0;
    }
}

var video2 = document.getElementsByTagName('video')[1]
video2.addEventListener('click', playAndPause2);

var click2 = 0;

function playAndPause2() {
    click2++;

    if (click2 == 1) {
        video2.play();
        click2++;
    }

    else {
        video2.pause();
        click2 = 0;
    }
}

var video3 = document.getElementsByTagName('video')[2]
video3.addEventListener('click', playAndPause3);

var click3 = 0;

function playAndPause3() {
    click3++;

    if (click3 == 1) {
        video3.play();
        click3++;
    }

    else {
        video3.pause();
        click3 = 0;
    }
}

var video4 = document.getElementsByTagName('video')[3]
video4.addEventListener('click', playAndPause4);

var click4 = 0;

function playAndPause4() {
    click4++;

    if (click4 == 1) {
        video4.play();
        click4++;
    }

    else {
        video4.pause();
        click4 = 0;
    }
}

var video5 = document.getElementsByTagName('video')[4]
video5.addEventListener('click', playAndPause5);

var click5 = 0;

function playAndPause5() {
    click5++;

    if (click5 == 1) {
        video5.play();
        click5++;
    }

    else {
        video5.pause();
        click5 = 0;
    }
}