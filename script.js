var submit = document.getElementById("submit");
var form = document.getElementById("inputform");
var inprogress = document.getElementById("currenttasks");
var completed = document.querySelector("#completedtasks");
var tasks = 0;
var assigneeNames = [
    "Abdul", "Anubhv", "Chetan",
    "Hari", "Jayesh", "Prabhjot",
    "Rahul", "Rakesh", "Rishab",
    "Sarthak", "Shibo"
];
var statusEnum;
(function (statusEnum) {
    statusEnum[statusEnum["inProgress"] = 0] = "inProgress";
    statusEnum[statusEnum["Completed"] = 1] = "Completed";
})(statusEnum || (statusEnum = {}));
var taskList = [];
var createAssigneDropdown = function (assigneeNames) {
    var select = document.getElementById("assignee");
    for (var _i = 0, assigneeNames_1 = assigneeNames; _i < assigneeNames_1.length; _i++) {
        var name_1 = assigneeNames_1[_i];
        var option = document.createElement("option");
        option.value = name_1;
        var optionValue = document.createTextNode(name_1);
        option.appendChild(optionValue);
        select.appendChild(option);
    }
};
createAssigneDropdown(assigneeNames);
var clearFormFields = function () {
    var form = document.getElementById("inputform");
    form.reset();
};
var addTask = function (task, assignee, date) {
    var newTask = {
        taskName: task,
        assigneName: assignee,
        date: new Date(date),
        taskStatus: statusEnum.inProgress,
        taskId: tasks++
    };
    taskList.push(newTask);
    var newTaskRow = inprogress.insertRow(-1);
    var newTaskName = newTaskRow.insertCell(0);
    var newTaskContent = document.createTextNode(task);
    newTaskName.appendChild(newTaskContent);
    var newAssigneeName = newTaskRow.insertCell(1);
    var newAssigneeContent = document.createTextNode(assignee);
    newAssigneeName.appendChild(newAssigneeContent);
    var newDate = newTaskRow.insertCell(2);
    var newDateContent = document.createTextNode(date);
    newDate.appendChild(newDateContent);
    var newCheckbox = newTaskRow.insertCell(3);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newCheckbox.appendChild(checkbox);
    checkbox.addEventListener("click", function (event) { return deleteTask(checkbox, newTask); });
    clearFormFields();
};
var deleteTask = function (checkbox, newTask) {
    var RowElement = checkbox.parentElement.parentElement;
    RowElement.remove();
    taskList[newTask.taskId].taskStatus = statusEnum.Completed;
    checkbox.disabled = true;
    completed.appendChild(RowElement);
};
var isValidatedTrue = function (task, assignee, date) {
    var currDate = new Date().toLocaleDateString();
    var dateArray = currDate.split('/');
    var newDate = dateArray[1] + '-' + dateArray[0] + '-' + dateArray[2];
    if ((task.trim() != "") && (assignee.trim() != "") && (assignee.trim() != "none") && (date.trim() != "") && (date.trim() >= newDate)) {
        return true;
    }
    return false;
};
var extractAndValidate = function (event) {
    event.preventDefault();
    var task = form.elements["task"].value;
    console.log(form.elements);
    var assignee = form.elements["assignee"].value;
    var date = form.elements["due-date"].value;
    date = date.split('-').reverse().join("-");
    if (isValidatedTrue(task, assignee, date)) {
        addTask(task, assignee, date);
    }
    else {
        alert("Please enter correct details");
    }
};
submit.addEventListener("click", extractAndValidate);
