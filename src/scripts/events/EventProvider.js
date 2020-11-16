let events = [];
const eventHub = document.querySelector(".container");

export const useEvents = () => events.slice();

export const getEvents = () => {
    return fetch(`http://localhost:8088/events`)
    .then(response => response.json())
    .then(response => events = response);
}

export const getEventsArrayByUser = user => {
    if(typeof(user) === "number")
        return useEvents().filter(ev => user === ev.userId);
    if(typeof(user) === "object")
        return useEvents().filter(ev => user.id === ev.userId);
}

const dispatchStateChange = () => {
    eventHub.dispatchEvent(new CustomEvent("eventListStateChanged"))
}

eventHub.addEventListener("addEventEvent", e => {

    console.log("test", e)
})