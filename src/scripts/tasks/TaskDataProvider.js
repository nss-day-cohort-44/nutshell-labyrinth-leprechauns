
import {render} from "./TaskList.js"

const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    const taskStateChangeEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangeEvent)
}

export const saveTaskList = (newTaskList) => {
    fetch("http://localhost:8088/tasks" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskList)
    })
    
    .then(getTasks).then(
        () => {
            const updatedTask = useTasks()
            render(updatedTask)})
}

let tasks = []


export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json())
    .then (
        task => {
            tasks = task
        }
    )
}

export const useTasks = () => {
    return tasks.slice()
}

export const deleteTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
    
}