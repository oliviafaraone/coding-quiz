
/* <button onclick="clear()">Clear high scores</button> */


// create array to hold scores for saving
// var scores = [];

// var taskFormHandler = function(event) {
//     event.preventDefault();
//     var NameInput = document.querySelector("input[name='task-name']").value;
  
//     // check if inputs are empty (validate)
//     if (!NameInput) {
//       alert("You need to fill out the task form!");
//       return false;
//     }
  
//     // reset form fields for next task to be entered
//     document.querySelector("input[name='task-name']").value = "";
  
//     // check if task is new or one being edited by seeing if it has a data-task-id attribute
//     var isEdit = formEl.hasAttribute("data-task-id");
  
//     if (isEdit) {
//       var taskId = formEl.getAttribute("data-task-id");
//       completeEditTask(taskNameInput, taskTypeInput, taskId);
//     } else {
//       var DataObj = {
//         name: taskNameInput,
//         score: score
//       };
//       createTaskEl(DataObj);
//     }
//   };