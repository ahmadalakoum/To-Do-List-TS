"use strict";
const input = document.getElementById("input-box");
const List = document.getElementById("list-container");
function addTask() {
    if (input.value === '')
        alert("you should write something");
    else {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
}
List.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    }
    else if (target.tagName === "SPAN") {
        target.parentElement.remove();
    }
});
