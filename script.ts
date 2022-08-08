let submit = document.getElementById("submit") as HTMLInputElement;
let form = document.getElementById("inputform") as HTMLFormElement;

let inprogress = document.getElementById("currenttasks") as HTMLTableElement;
let completed = document.querySelector("#completedtasks") as HTMLTableElement;

let tasks: number = 0;
let assigneeNames: string[] = 
[
                    "Abdul","Anubhv","Chetan"
                    ,"Hari","Jayesh","Prabhjot"
                    ,"Rahul","Rakesh","Rishab"
                    ,"Sarthak","Shibo"
]

enum statusEnum{
    inProgress = 0, 
    Completed = 1
}

type taskDetails = {
    taskName: string,
    assigneName: string,
    date: Date,
    taskStatus: statusEnum
    taskId: number
}

let taskList: taskDetails[] = [];

let createAssigneDropdown = (assigneeNames: string[]) => {
    let select = document.getElementById("assignee");
    for (let name of assigneeNames) {
        let option = document.createElement("option");
        option.value = name;
        let optionValue = document.createTextNode(name);
        option.appendChild(optionValue);
        select.appendChild(option);
    }
}

createAssigneDropdown(assigneeNames);

let clearFormFields = () => {
    let form = document.getElementById("inputform") as HTMLFormElement;
    form.reset();
}

let addTask = (task: string, assignee: string, date: string) => {
    
    let newTask: taskDetails = {
        taskName: task,
        assigneName: assignee,
        date: new Date(date),
        taskStatus: statusEnum.inProgress,
        taskId: tasks++
    }

    taskList.push(newTask);

    let newTaskRow = inprogress.insertRow(-1);

    let newTaskName = newTaskRow.insertCell(0);
    let newTaskContent = document.createTextNode(task);
    newTaskName.appendChild(newTaskContent);

    let newAssigneeName = newTaskRow.insertCell(1);
    let newAssigneeContent = document.createTextNode(assignee);
    newAssigneeName.appendChild(newAssigneeContent);
    
    let newDate = newTaskRow.insertCell(2);
    let newDateContent = document.createTextNode(date);
    newDate.appendChild(newDateContent);

    let newCheckbox = newTaskRow.insertCell(3);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newCheckbox.appendChild(checkbox);

    checkbox.addEventListener("click", (event: PointerEvent) => deleteTask(checkbox,newTask));

    clearFormFields();
}

let deleteTask = (checkbox:HTMLInputElement, newTask: taskDetails) => {
    let RowElement = checkbox.parentElement.parentElement as HTMLTableRowElement;
    RowElement.remove();
    taskList[newTask.taskId].taskStatus = statusEnum.Completed;
    checkbox.disabled = true;
    completed.appendChild(RowElement);
}

let isValidatedTrue = (task: string, assignee: string, date: string):boolean => {
    let currDate: string = new Date().toLocaleDateString();
    let dateArray: string[] = currDate.split('/');
    let newDate: string = dateArray[1] + '-' + dateArray[0] + '-' + dateArray[2];

    if((task.trim() != "") && (assignee.trim() != "") && (assignee.trim() != "none") && (date.trim() != "") && (date.trim() >= newDate)){
        return true;
    }
    return false;
}

let extractAndValidate = (event: PointerEvent) => {
    event.preventDefault();
    let task: string = form.elements["task"].value;
    console.log(form.elements);
    let assignee: string = form.elements["assignee"].value;
    let date: string = form.elements["due-date"].value;
    date = date.split('-').reverse().join("-");

    if(isValidatedTrue(task,assignee,date)){
        
        addTask(task,assignee,date);
    }

    else{
        alert("Please enter correct details")
    }
    
}
    
submit.addEventListener("click",extractAndValidate);