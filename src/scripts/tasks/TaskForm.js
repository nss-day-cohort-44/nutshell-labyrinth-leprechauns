// Author: Travis Milner, Purpose: This module is responsible for rendering a form and looking for a submit click that save thats forms value. 


import { saveTaskList } from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")
// this function is simply the html for the form to create a task
export const TaskHtml = () => {
    const contentTarget = document.querySelector("#createForm")

    return contentTarget.innerHTML = `
        <form id = "taskForm">
            <input type = "text" placeholder = "Task..." id="taskField"></input><br>
            <label for = "date">Expected Completion Date</label><br>
            <input type = "date" id = "date"></input>
            <button id = "submit" type = "button">Save Task</button>
        </form>   
    `
}
// this event listener is listening for an event on the save button. when it does that it will take the value from what you filled out and store it in an object. saveTaskList posts it to the database
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