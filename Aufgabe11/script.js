var arrayTodo = [
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
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openDOMElement;
var doneDOMElement;
var artyomStart = false;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + arrayTodo[index_1].checked + "'><i class='fas fa-check'></i></span>"
            + arrayTodo[index_1].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index_1 = 0; index_1 < arrayTodo.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
var taskDone = 2;
var taskOpen = 4;
function updateCounter() {
    counterDOMElement.innerHTML = arrayTodo.length + " in total";
    openDOMElement.innerHTML = taskOpen + " open";
    doneDOMElement.innerHTML = taskDone + " done";
}
function addTodo(text) {
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
function toggleCheckState(index) {
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
function deleteTodo(index) {
    if (arrayTodo[index].checked == true) {
        taskDone--;
    }
    else if (arrayTodo[index].checked == false) {
        taskOpen--;
    }
    arrayTodo.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Aufgabe hinzufügen*"],
        action: function (i, wildcard) {
            artyomStart = true;
            addTodo(wildcard);
        }
    });
    document.querySelector("#start").addEventListener("click", function () {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE",
            debug: true
        });
        artyom.say("Hallo, sag Aufgabe hinzufügen, um neue Aufgaben zu erstellen.");
        setTimeout(function () {
            artyom.obey();
        }, 5000);
        startArtyom();
    });
    document.querySelector("#stop").addEventListener("click", function () {
        stopArtyom();
        artyom.say("Deine Aufgabe wurde hinzugefügt");
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
    function stopArtyom() {
        artyom.fatality();
    }
});
//# sourceMappingURL=script.js.map