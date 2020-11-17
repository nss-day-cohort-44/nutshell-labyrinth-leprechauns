/*  Author: Devin Kent
    Purpose: Manage event data.
*/

import { RenderCreateArea } from "../home/HomePage.js";

let events = [];
const eventHub = document.querySelector(".container");

export const useEvents = () => events.slice();

export const getEvents = () => {
    return fetch(`http://localhost:8088/events`)
    .then(response => response.json())
    .then(response => events = response);
}

const addEvent = (name, location, eventDate, userId) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            location,
            eventDate,
            userId
        })
    })
}

const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
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
    addEvent(e.detail.eventName, e.detail.eventLocation, e.detail.eventDate, e.detail.userId)
    .then(() => {
        dispatchStateChange();
        RenderCreateArea();  
    })
})

eventHub.addEventListener("deleteEventEvent", e => {
    deleteEvent(e.detail.eventId)
    .then(() => {
        dispatchStateChange();
    })
})