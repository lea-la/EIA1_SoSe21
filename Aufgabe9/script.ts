let count: number = 0;
let task: any = document.getElementById("input");
let inputBool: boolean = false;
let eventBool: boolean = false;

document.addEventListener("keydown", function (event: KeyboardEvent): void {
    if (event.code == "Enter" && inputBool == true) {
        newTask();
        setTimeout(function (): void {
            clearInput();
        },         100);
        eventBool = false;
    }
});


document.addEventListener("click", function (): void {
    if (eventBool == false) {
        inputBool = false;
    }
});


task.addEventListener("click", function (): void {
    inputBool = true;
    eventBool = true;
});

function newTask(): void { 
    
    let container: HTMLDivElement = document.createElement("div");
    let circle: HTMLElement = document.createElement("i");
    circle.className = "far fa-circle";
    let check: HTMLElement = document.createElement("i");
    check.className = "fas fa-check isHidden";
    let text: HTMLSpanElement = document.createElement("span");
    text.className = "task-text";
    text.innerHTML = task.value;
    let remove: HTMLElement = document.createElement("i");
    remove.className = "far fa-trash-alt";

    
    document.body.appendChild(container);
    container.appendChild(circle);
    container.appendChild(check);
    container.appendChild(text);
    container.appendChild(remove);

   
    count++;
    counter();

    
    circle.addEventListener("click", function (): void { 
        check.classList.remove("isHidden");

    });

    check.addEventListener("click", function (): void {
        check.classList.add("isHidden");
        text.setAttribute("style", "text-decoration: " + "none");
    });

    remove.addEventListener("click", function (): void {
        document.body.removeChild(container);
        count--;
        counter();
    });
}

function counter(): void {
    document.querySelector("#number").innerHTML = count + " in total" ;
}

function clearInput(): void {
    task.value = "";
}

