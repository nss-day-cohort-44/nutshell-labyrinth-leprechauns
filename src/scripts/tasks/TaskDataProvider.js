export const saveTaskList = (newTaskList) => {
    fetch("http://localhost:8088/tasks" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskList)
    })
}

let tasks = []


const getEntries = () => {
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json())
    .then (
        task => {
            tasks = task
        }
    )
}

export const useEntries = () => {
    return tasks.slice()
}