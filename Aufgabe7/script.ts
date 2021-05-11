var soundA: HTMLAudioElement = new Audio('assets/A.mp3');
var soundC: HTMLAudioElement = new Audio('assets/C.mp3');
var soundF: HTMLAudioElement = new Audio('assets/F.mp3');
var soundG: HTMLAudioElement = new Audio('assets/G.mp3');
var soundhithat: HTMLAudioElement = new Audio('assets/hihat.mp3');
var soundkick: HTMLAudioElement = new Audio('assets/kick.mp3');
var soundlaugh1: HTMLAudioElement = new Audio('assets/laugh-1.mp3');
var soundlaugh2: HTMLAudioElement = new Audio('assets/laugh-2.mp3');
var soundsnare: HTMLAudioElement = new Audio('assets/snare.mp3');


var sounds: HTMLAudioElement[] = [soundA, soundC, soundF, soundG, soundhithat, soundkick, soundlaugh1, soundlaugh2, soundsnare];
var beat: HTMLAudioElement[] = [soundkick, soundhithat, soundsnare]
var index: number = 0;

function playSound(sounds) {
    sounds.play()
};


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

function playBeat() {
    var interval: number = setInterval(function () {

        beat[index].play();

        index = index + 1;

        if (index == 3) {
            index = 0;
        }
    }, 700);
};






