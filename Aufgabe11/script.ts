interface ToDos {
    text: string;
    checked: boolean;
}

let arrayTodo: ToDos[] = [
    {
        text: "Lorem",
        checked: true
    },
    {
        text: "Ipsum",
        checked: false
    },
    {
        text: "Dolor",
        checked: false

    },
    {
        text: "Lorem",
        checked: true
    },
    {
        text: "Ipsum",
        checked: false
    },
    {
        text: "Dolor",
        checked: false

    }

];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var artyomStart: boolean = false;

window.addEventListener("load", function (): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");

    addButtonDOMElement.addEventListener("click", function (): void {
        addTodo(inputDOMElement.value);
    });
    drawListToDOM();
});

function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < arrayTodo.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML = "<span class='check " + arrayTodo[index].checked + "'><i class='fas fa-check'></i></span>"
            + arrayTodo[index].text +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {

            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {

            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}


var taskDone: number = 2;
var taskOpen: number = 4;

function updateCounter(): void {
    counterDOMElement.innerHTML = arrayTodo.length + " in total";
    openDOMElement.innerHTML = taskOpen + " open";
    doneDOMElement.innerHTML = taskDone + " done";
}

function addTodo(text: string): void {

    if (inputDOMElement.value != "") {

        arrayTodo.unshift({
            text: inputDOMElement.value,
            checked: false
        });


        inputDOMElement.value = "";
        taskOpen++;

        drawListToDOM();
    }

    if (artyomStart == true) {
        arrayTodo.unshift({
            text: text,
            checked: false
        });
        artyomStart = false;
        taskOpen++;
        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {


    if (arrayTodo[index].checked == true) {
        arrayTodo[index].checked = false;
        taskDone--;
        taskOpen++;
    }
    else if (arrayTodo[index].checked == false) {
        arrayTodo[index].checked = true;
        taskDone++;
        taskOpen--;
    }

    drawListToDOM();
}


function deleteTodo(index: number): void {

    if (arrayTodo[index].checked == true) {
        taskDone--;
    }
    else if (arrayTodo[index].checked == false) {
        taskOpen--;
    }

    arrayTodo.splice(index, 1);


    drawListToDOM();
}



window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Aufgabe hinzufügen*"],
        action: function (i: any, wildcard: string): void {
            artyomStart = true;
            addTodo(wildcard);
        }
    });

    document.querySelector("#start").addEventListener("click", function (): void {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE",
            debug: true 
        });
        artyom.say("Hallo, sag Aufgabe hinzufügen, um neue Aufgaben zu erstellen.");
        setTimeout(function (): void {
            artyom.obey();
        }, 5000);
        startArtyom();
    });
    document.querySelector("#stop").addEventListener("click", function (): void {
        stopArtyom();
        artyom.say("Deine Aufgabe wurde hinzugefügt");
    });

    function startArtyom(): void {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
    function stopArtyom(): void {
        artyom.fatality();
    }
});