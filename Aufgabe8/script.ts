
var sounds: HTMLAudioElement[] = [];
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
var playB: HTMLElement = document.getElementById("play");
var stopB: HTMLElement = document.getElementById("stop");
var deleteB: HTMLElement = document.getElementById("delete");
var remixB: HTMLElement = document.getElementById("remix");
var i: number = 0;
var beatInt: number;
var beatA: number[] = [];
beatA[0] = 4;
beatA[1] = 5;
beatA[2] = 6;

document.querySelector("#pad1").addEventListener("click", function (): void {
    playSound(0);

});

document.querySelector("#pad2").addEventListener("click", function (): void {
    playSound(1);

});

document.querySelector("#pad3").addEventListener("click", function (): void {
    playSound(2);

});

document.querySelector("#pad4").addEventListener("click", function (): void {
    playSound(3);

});

document.querySelector("#pad5").addEventListener("click", function (): void {
    playSound(4);

});

document.querySelector("#pad6").addEventListener("click", function (): void {
    playSound(5);

});

document.querySelector("#pad7").addEventListener("click", function (): void {
    playSound(6);

});

document.querySelector("#pad8").addEventListener("click", function (): void {
    playSound(7);

});

document.querySelector("#pad9").addEventListener("click", function (): void {
    playSound(8);

});

playB.addEventListener("click", function (): void {
    toggleClasses(this, stopB);
    playBeat();
});

stopB.addEventListener("click", function (): void {
    toggleClasses(this, playB);
    stopBeat();
});

deleteB.addEventListener("click", function (): void {
    deleteBeat();
});

remixB.addEventListener("click", function (): void {
    remix();
});

function toggleClasses(firstHtml: HTMLElement, secondHtml: HTMLElement): void {
    firstHtml.classList.add("is-hidden");
    secondHtml.classList.remove("is-hidden");
}

function playSound(x: number): void {
    sounds[x].play();
}

function playBeat(): void {

    beatInt = setInterval(function (): void {
        if (i < beatA.length) {
            playSound(beatA[i]);
            i++;
        } else {
            i = 0;
        }
    },                    700);
}

function stopBeat(): void {
    clearInterval(beatInt);


}

function deleteBeat(): void {

    beatA.length = 0;
    if (sounds.length == 0) {
        playB.classList.remove("is-hidden");
        stopB.classList.add("is-hidden");
    }

}




function remix(): void {

    beatA = [];

    for (let i: number = 0; i < 3; i++) {
        var random: number = Math.floor(Math.random() * 9);

        beatA.push(random);
    }

    playBeat();


    toggleClasses(playB, stopB);
}
