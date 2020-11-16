import { TaskHtml } from "./TaskForm.js"

const eventHub = document.querySelector(".container")




export const TaskFormRender = () => {
    eventHub.addEventListener("taskButtonClicked", event => {
        TaskHtml()
    })
}