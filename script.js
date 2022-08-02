let add = document.querySelector("#add");
let inputform = add.parentNode;

let inprogress = document.querySelector("#currenttasks");
let completed = document.querySelector("#completedtasks");

let uniqueid = 0;

let addTask = (task,assignee,date) => {
   let newtask = document.createElement("tr");

   let cell1 = document.createElement("td");
   cell1.innerHTML = task;

   let cell2 = document.createElement("td");
   cell2.innerHTML = assignee;

   let cell3 = document.createElement("td");
   cell3.innerHTML = date.split("-").reverse().join("-");

   let cell4 = document.createElement("td");
   let checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.addEventListener("click",deleteTask);
   checkbox.id = uniqueid++;
   cell4.appendChild(checkbox);

   newtask.appendChild(cell1);
   newtask.appendChild(cell2);
   newtask.appendChild(cell3);
   newtask.appendChild(cell4);
   inprogress.appendChild(newtask);
}

let deleteTask = (e) => {
    let found = e.target.id;
    let task = document.getElementById(found);
    let child = task.closest("tr");
    let parent = task.parentNode;
    parent.removeChild(task);
    completed.appendChild(child);
}

let validation = (task,assignee,date) => {
    let currdate = new Date();
    currdate.setHours(0, 0, 0, 0);
    if(task == "" || assignee == "" || date == "" || date < currdate){
        return false;
    }
    return true;
}

let inputvalues = (e) => {
    e.preventDefault();

    let data = new FormData(inputform);
    let task = data.get("task");
    let assignee = data.get("assignee");
    let date = data.get("due-date");   

    if(validation(task,assignee,date)){
        addTask(task,assignee,date);
    }
    else{
     alert("ENTER CORRECT DETAILS");
    }
 }

add.addEventListener("click",inputvalues);

