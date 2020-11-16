import { saveTaskList } from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")

export const TaskHtml = () => {
    const contentTarget = document.querySelector("#createForm")

    return contentTarget.innerHTML += `
        <form id = "taskForm">
            <input type = "text" placeholder = "Task..." id="taskField"></input><br>
            <label for = "date">Expected Completion Date</label><br>
            <input type = "date" id = "date"></input>
            <button id = "submit" type = "button">Save Task</button>
        </form>   
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submit") {
        console.log("savebuttonclicked")
        const task = document.querySelector("#taskField").value
        const date = document.querySelector("#date").value 

        const NewTask = {
            userId: +sessionStorage.getItem("activeUser"),
            task,
            date,
            completed: false
        }
        saveTaskList(NewTask)
        console.log(NewTask)
    }
})