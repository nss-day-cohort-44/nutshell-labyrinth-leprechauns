/*  Author: Devin Kent
    Purpose: Draw the list of events.
*/

import { getEventsArrayByUser, getEvents, getEventById } from "./EventProvider.js";
import { EventCard } from "./Event.js";
import { eventWeather } from "../weather/WeatherSelect.js";


const eventHub = document.querySelector(".container");

export const EventList = () => {
    const contentTarget = document.querySelector(".eventFeed");
    const user = parseInt(sessionStorage.getItem("activeUser"));

    const evArray = getEventsArrayByUser(user);
    let htmlRep = "<h2>Event List</h2>"
    htmlRep += evArray.map(ev => `${EventCard(ev)}${AddDeleteButton(ev)}${AddWeatherButton(ev)}`).join("");
    contentTarget.innerHTML = htmlRep;
}

eventHub.addEventListener("eventListStateChanged", e => {
    getEvents()
    .then(EventList);
})

const AddDeleteButton = ev => {
    // Only add a delete button if the active user created this event.
    if(ev.userId === +sessionStorage.getItem("activeUser"))
        return `<button id="deleteEvent--${ev.id}">Delete</button>`;
    else
        return ``;
}

const AddWeatherButton = ev => {
    return `<button id="eventWeather--${ev.id}">Show Weather</button>`;
}

eventHub.addEventListener("click", e => {
    if(e.target.id.startsWith("deleteEvent")) {
        const [temp, eventId] = e.target.id.split("--");
        eventHub.dispatchEvent(new CustomEvent("deleteEventEvent", {
            detail: {
                eventId
            }
        }))
    }
    if(e.target.id.startsWith("eventWeather")) {
        const [temp, eventId] = e.target.id.split("--");
        const ev = getEventById(parseInt(eventId));
        eventWeather(ev.eventCity, ev.eventState);
    }
})