var count = 0;
var task = document.getElementById("input");
var inputBool = false;
var eventBool = false;
document.addEventListener("keydown", function (event) {
    if (event.code == "Enter" && inputBool == true) {
        newTask();
        setTimeout(function () {
            clearInput();
        }, 100);
        eventBool = false;
    }
});
document.addEventListener("click", function () {
    if (eventBool == false) {
        inputBool = false;
    }
});
task.addEventListener("click", function () {
    inputBool = true;
    eventBool = true;
});
function newTask() {
    var container = document.createElement("div");
    var circle = document.createElement("i");
    circle.className = "far fa-circle";
    var check = document.createElement("i");
    check.className = "fas fa-check isHidden";
    var text = document.createElement("span");
    text.className = "task-text";
    text.innerHTML = task.value;
    var remove = document.createElement("i");
    remove.className = "far fa-trash-alt";
    document.body.appendChild(container);
    container.appendChild(circle);
    container.appendChild(check);
    container.appendChild(text);
    container.appendChild(remove);
    count++;
    counter();
    circle.addEventListener("click", function () {
        check.classList.remove("isHidden");
    });
    check.addEventListener("click", function () {
        check.classList.add("isHidden");
        text.setAttribute("style", "text-decoration: " + "none");
    });
    remove.addEventListener("click", function () {
        document.body.removeChild(container);
        count--;
        counter();
    });
}
function counter() {
    document.querySelector("#number").innerHTML = count + " in total";
}
function clearInput() {
    task.value = "";
}
//# sourceMappingURL=script.js.map