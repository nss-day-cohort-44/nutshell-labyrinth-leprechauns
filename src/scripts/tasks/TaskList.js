import { TaskHtml } from "./TaskForm.js"
import { getTasks, useTasks } from "./TaskDataProvider.js"
import { TaskEntryComponent } from "./TaskEntry.js"

const taskContainer = document.querySelector(".asideLeft__taskList")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("taskStateChanged", () =>  TaskList())




export const TaskFormRender = () => {
    eventHub.addEventListener("taskButtonClicked", event => {
        TaskHtml()
    })
}

 export const TaskList = () => {
    getTasks()
    .then (() => {
        const allTasks = useTasks()
        render(allTasks)
    })
}

export const render = (taskArray) => {
    let taskHTMLRepresentations = "<h2>---Task List---</h2>"
    const incompleteTasks = taskArray.filter(task =>  {
       return !task.completed && task.userId === 1
    })
    for (const task of incompleteTasks) {
        taskHTMLRepresentations += TaskEntryComponent(task)
    }
    taskContainer.innerHTML = `${taskHTMLRepresentations}`
}