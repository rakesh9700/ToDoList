
// let addTaskElem = document.getElementById("add");
// let form = document.getElementById("inputform") as HTMLFormElement;

// let inprogress = document.getElementById("currenttasks") as HTMLTableElement;
// //let completed = document.querySelector("#completedtasks") as HTMLTableElement;

// enum statusEnum{
//     inProgress, Completed,
// }
// enum assigneeEnum{
//     Rakesh, Hari, Chetan, Abdul, Anubhav,
// }
// type taskType = string;
// type assigneeType = assigneeEnum;
// type dateType = string;
// type statusType = statusEnum;

// let addTask = () => {
//     let task: taskType = form.elements["task"].value;
//     let assignee: assigneeEnum = form.elements["assignee"].value;
//     let date: dateType = form.elements["due-date"].value;
//     //let formData = new FormData(form);
//     //let task = formData.get("task");
//     // //let assignee: assigneeEnum = formData["assignee"];
//     // //let date: dateType = formData["due-date"];

//     let newRow = inprogress.insertRow(-1);

//     let newCell = newRow.insertCell(-1);
//     let newTaskContent = document.createTextNode(task);
//     newCell.appendChild(newTaskContent);

//     // let newCell2 = newtask.insertCell();
//     // let newTaskContent2 = document.createTextNode(assigneeEnum[assignee]);
//     // newCell2.appendChild(newTaskContent2);
    
//     // let newCell3 = newtask.insertCell();
//     // let newTaskContent3 = document.createTextNode(date);
//     // newCell3.appendChild(newTaskContent3);

//     // let newCell = newRow.insertCell();


//     // let cell2 = document.createElement("td");
//     // cell2.childNodes[0].nodeValue = assigneeEnum[assignee];

//     // let cell3 = document.createElement("td");
//     // cell3.childNodes[0].nodeValue = date;
//     // // cell3.innerHTML = date.split("-").reverse().join("-");

//     //newtask.appendChild(cell1);
//     // newtask.appendChild(cell2);
//     //newtask.appendChild(cell3);
//     //inprogress.appendChild(newtask);
// }

//     /* let task: taskType = formData.getElementById("task");
//     let assignee: assigneeEnum = formData.getElementById("assignee");
//     let date: dateType = formData.getElementById("due-date"); 
//     let newtask = inprogress.insertRow();
    
//     let newCell = newtask.insertCell();
//     let newTaskContent = document.createTextNode(task);
//     newCell.appendChild(newTaskContent);
    
//     let newCell2 = newtask.insertCell();
//     let newTaskContent2 = document.createTextNode(assigneeEnum[assignee]);
//     newCell2.appendChild(newTaskContent2);
    
//     let newCell3 = newtask.insertCell();
//     let newTaskContent3 = document.createTextNode(date);
//     newCell3.appendChild(newTaskContent3); */
    
// addTaskElem.addEventListener("click",addTask);




// //---------------


// // let addTaskElem = document.querySelector("#add");
// // let formData = addTaskElem.parentNode as HTMLFormElement;

// // let inprogress = document.querySelector("#currenttasks") as HTMLTableElement;
// // let completed = document.querySelector("#completedtasks") as HTMLTableElement;

// // let uniqueid = 0;

// // enum statusEnum{
// //     inProgress, Completed,
// // }
// // enum assigneeEnum{
// //     Rakesh, Hari, Chetan, Abdul, Anubhav,
// // }
// // type taskType = string;
// // type assigneeType = assigneeEnum;
// // type dateType = string;
// // type statusType = statusEnum;



// // let addTask = () => {

// //     let task: taskType = formData.getElementById("task");
// //     let assignee: assigneeEnum = formData.getElementById("assignee");
// //     let date: dateType = formData.getElementById("due-date"); 
// //     let newtask = inprogress.insertRow();

// //     let newCell = newtask.insertCell();
// //     let newTaskContent = document.createTextNode(task);
// //     newCell.appendChild(newTaskContent);

// //     let newCell2 = newtask.insertCell();
// //     let newTaskContent2 = document.createTextNode(assigneeEnum[assignee]);
// //     newCell2.appendChild(newTaskContent2);

// //     let newCell3 = newtask.insertCell();
// //     let newTaskContent3 = document.createTextNode(date);
// //     newCell3.appendChild(newTaskContent3);


// // //    let newtask = document.createElement("tr");

// // //    let cell1 = document.createElement("td");
// // //    cell1.nodeValue = task;

// // //    let cell2 = document.createElement("td");
// // //    cell2.nodeValue = 'assigneeEnum';

// // //    let cell3 = document.createElement("td");
// // //    cell3.nodeValue = date;

// //    //let cell3 = document.createElement("td");
// //    //cell3.innerHTML = date.split("-").reverse().join("-");

// // //    let cell4 = document.createElement("td");

// // //    let checkbox = document.createElement("input");
// // //    checkbox.type = "checkbox";

// //    //checkbox.addEventListener("click",deleteTask);

// //    //checkbox.id = String(uniqueid++);
// // //    cell4.appendChild(checkbox);

// // //    newtask.appendChild(cell1);
// // //    newtask.appendChild(cell2);
// // //    newtask.appendChild(cell3);
// // //    newtask.appendChild(cell4);
// // //    inprogress.appendChild(newtask);

// // }

// // // let deleteTask = (e:any) => {
// // //     e.preventDefault();
// // //     let found = e.id;
// // //     let task = document.getElementById(found);
// // //     let child = task.closest("tr");
// // //     let parent = task.parentNode;
// // //     parent.removeChild(task);
// // //     completed.appendChild(child);
// // // }

// // // let validation = (task: taskType,assignee: assigneeEnum,date: string) => {
// // //     let currdate: Date = new Date();
// // //     currdate.setHours(0, 0, 0, 0);
// // //     // if(task == "" || !assignee || !date){
// // //     //     return false;
// // //     // }
// // //     return true;
// // // }

// // // let extractAndValidate = () => {
// // //     //let data = new FormData(formData);
// // //     let task: taskType = formData.getElementById("task");
// // //     let assignee: assigneeEnum = formData.getElementById("assignee");
// // //     let date: dateType = formData.getElementById("due-date"); 
    
// // //     addTask(task,assignee,date);

// // //     // if(validation(task,assignee,date)){
// // //     //     addTask(task,assignee,date);
// // //     // }
// // //     // else{
// // //     //  alert("ENTER CORRECT DETAILS");
// // //     // }
// // //  }

// //  addTaskElem.addEventListener("click",addTask);

