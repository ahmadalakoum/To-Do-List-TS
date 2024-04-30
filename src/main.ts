const input=document.getElementById("input-box") as HTMLInputElement;
const List=document.getElementById("list-container")!;

function addTask():void{
    if(input.value === '')
        alert("you should write something");

    else{
        const li = document.createElement("li");
        li.innerHTML=input.value;
        List.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value='';
}

List.addEventListener("click", function (e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    } else if (target.tagName === "SPAN") {
        target.parentElement!.remove();
    }

});

