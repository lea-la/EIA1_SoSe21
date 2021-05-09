var soundA = new Audio('assets/A.mp3');
var soundC = new Audio('assets/C.mp3');
var soundF = new Audio('assets/F.mp3');
var soundG = new Audio('assets/G.mp3');
var soundhithat = new Audio('assets/hihat.mp3');
var soundkick = new Audio('assets/kick.mp3');
var soundlaugh1 = new Audio('assets/laugh-1.mp3');
var soundlaugh2 = new Audio('assets/laugh-2.mp3');
var soundsnare = new Audio('assets/snare.mp3');
var sounds = [soundA, soundC, soundF, soundG, soundhithat, soundkick, soundlaugh1, soundlaugh2, soundsnare];
var beat = [soundhithat, soundkick, soundsnare];
window.addEventListener('load', function () {
    document.querySelector("#pad1").addEventListener("click", function () {
        playSound(soundA);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad2").addEventListener("click", function () {
        playSound(soundC);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad3").addEventListener("click", function () {
        playSound(soundF);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad4").addEventListener("click", function () {
        playSound(soundG);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad5").addEventListener("click", function () {
        playSound(soundhithat);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad6").addEventListener("click", function () {
        playSound(soundkick);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad7").addEventListener("click", function () {
        playSound(soundlaugh1);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad8").addEventListener("click", function () {
        playSound(soundlaugh2);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#pad9").addEventListener("click", function () {
        playSound(soundsnare);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#playbutton").addEventListener("click", function () {
        playBeat();
    });
});
function playSound(sounds) {
    sounds.play();
}
;
function playBeat() {
    beat[0].play();
    beat[1].play();
    beat[2].play();
    var myVar = setInterval(playBeat, 300);
}
//# sourceMappingURL=script.js.map