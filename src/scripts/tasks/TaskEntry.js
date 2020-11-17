import { deleteTask, useTasks } from "./TaskDataProvider.js"
import {render} from "./TaskList.js"
import {getTasks} from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")

export const TaskEntryComponent = (entry) => {
    return `
        <section id = "entry--${entry.id}" class = "taskCard" value = "${entry.id}">
        <ul>
        <li>Task: ${entry.task}<input type = "checkbox" id = "check--${entry.id}"></input></li>
        <li>Date to be Completed: ${entry.date}</li>
         </ul>
         <button id = "deleteTask--${entry.id}">Delete</button>
        
        
        
        </section>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteTask--")) {
        const [prefix,id] = event.target.id.split("--")
        deleteTask(id).then(
            getTasks).then(
            () => {
                const updatedTask = useTasks()
                render(updatedTask)
            }
        )
    }
})

eventHub.addEventListener("change", event => {
    if(event.target.id.startsWith("check--")) {
        console.log("completegotclicked")
        const [prefix, id] = event.target.id.split("--")
       
        const task = useTasks().find(t => t.id === +id)
        const taskCompleted = {
            id: task.id,
            userId: task.userId,
            task: task.task,
            completed: true
        }
        taskComplete(taskCompleted)
        .then(getTasks).then(
            () => {
                const updatedTask = useTasks()
                render(updatedTask)})
    }
})

const taskComplete = (task) => {
    return fetch (`http://localhost:8088/tasks/${task.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"
    },
        body: JSON.stringify(task)
    })
}