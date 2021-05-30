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
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
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
function updateCounter() {
    counterDOMElement.innerHTML = arrayTodo.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        arrayTodo.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    arrayTodo[index].checked = !arrayTodo[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    arrayTodo.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map