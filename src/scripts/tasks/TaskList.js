// Author: Travis Milner, Purpose: This module is responsible for rendering the new tasks. It is also responsible for rendering the create form


import { TaskHtml } from "./TaskForm.js"
import { getTasks, useTasks } from "./TaskDataProvider.js"
import { TaskEntryComponent } from "./TaskEntry.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("taskStateChanged", () =>  TaskList())



// this function simply listens for the create task button click event and then renders the form to the dom to create a task
export const TaskFormRender = () => {
    eventHub.addEventListener("taskButtonClicked", event => {
        TaskHtml()
    })
}
// this function is responsible for getting the tasks from the database and then rendering those tasks
export const TaskList = () => {
    getTasks()
    .then (() => {
        const allTasks = useTasks()
        render(allTasks)
    })
}
// this is responsible for rendering your tasks. Later on this condtional needs to be changed to reflect the current user
export const render = (taskArray) => {
    const taskContainer = document.querySelector(".asideLeft__taskList")
    let taskHTMLRepresentations = "<h2>---Task List---</h2>"
    const incompleteTasks = taskArray.filter(task =>  {
       return !task.completed && task.userId === 1
    })
    for (const task of incompleteTasks) {
        taskHTMLRepresentations += TaskEntryComponent(task)
    }
    taskContainer.innerHTML = `${taskHTMLRepresentations}`
}