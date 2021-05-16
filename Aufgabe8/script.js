var sounds = [];
sounds[0] = new Audio("assets/A.mp3");
sounds[1] = new Audio("assets/C.mp3");
sounds[2] = new Audio("assets/F.mp3");
sounds[3] = new Audio("assets/G.mp3");
sounds[4] = new Audio("assets/hihat.mp3");
sounds[5] = new Audio("assets/kick.mp3");
sounds[6] = new Audio("assets/snare.mp3");
sounds[7] = new Audio("assets/laugh-1.mp3");
sounds[8] = new Audio("assets/laugh-2.mp3");
//HTML-Elemente:
var playB = document.getElementById("play");
var stopB = document.getElementById("stop");
var deleteB = document.getElementById("delete");
var remixB = document.getElementById("remix");
var i = 0;
var beatInt;
var beatA = [];
beatA[0] = 4;
beatA[1] = 5;
beatA[2] = 6;
document.querySelector("#pad1").addEventListener("click", function () {
    playSound(0);
});
document.querySelector("#pad2").addEventListener("click", function () {
    playSound(1);
});
document.querySelector("#pad3").addEventListener("click", function () {
    playSound(2);
});
document.querySelector("#pad4").addEventListener("click", function () {
    playSound(3);
});
document.querySelector("#pad5").addEventListener("click", function () {
    playSound(4);
});
document.querySelector("#pad6").addEventListener("click", function () {
    playSound(5);
});
document.querySelector("#pad7").addEventListener("click", function () {
    playSound(6);
});
document.querySelector("#pad8").addEventListener("click", function () {
    playSound(7);
});
document.querySelector("#pad9").addEventListener("click", function () {
    playSound(8);
});
playB.addEventListener("click", function () {
    toggleClasses(this, stopB);
    playBeat();
});
stopB.addEventListener("click", function () {
    toggleClasses(this, playB);
    stopBeat();
});
deleteB.addEventListener("click", function () {
    deleteBeat();
});
remixB.addEventListener("click", function () {
    remix();
});
function toggleClasses(firstHtml, secondHtml) {
    firstHtml.classList.add("is-hidden");
    secondHtml.classList.remove("is-hidden");
}
function playSound(x) {
    sounds[x].play();
}
function playBeat() {
    beatInt = setInterval(function () {
        if (i < beatA.length) {
            playSound(beatA[i]);
            i++;
        }
        else {
            i = 0;
        }
    }, 600);
}
function stopBeat() {
    clearInterval(beatInt);
}
function deleteBeat() {
    beatA.length = 0;
    if (sounds.length == 0) {
        playB.classList.remove("is-hidden");
        stopB.classList.add("is-hidden");
    }
}
function remix() {
    beatA = [];
    for (var i_1 = 0; i_1 < 3; i_1++) {
        var random = Math.floor(Math.random() * 9);
        beatA.push(random);
    }
    playBeat();
    toggleClasses(playB, stopB);
}
//# sourceMappingURL=script.js.map