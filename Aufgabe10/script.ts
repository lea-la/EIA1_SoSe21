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

    }

];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function (): void {


    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");


    addButtonDOMElement.addEventListener("click", addTodo);


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

function updateCounter(): void {
    counterDOMElement.innerHTML = arrayTodo.length + " in total";
}


function addTodo(): void {

    if (inputDOMElement.value != "") {

        arrayTodo.unshift({
            text: inputDOMElement.value,
            checked: false
        });



        inputDOMElement.value = "";


        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {


    arrayTodo[index].checked = !arrayTodo[index].checked;


    drawListToDOM();
}


function deleteTodo(index: number): void {

    arrayTodo.splice(index, 1);



    drawListToDOM();
}