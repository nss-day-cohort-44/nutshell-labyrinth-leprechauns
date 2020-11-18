/*  Author: Devin Kent, TRAVIS MILNER
    Purpose: Draw the list of events.
*/

import { getEventsArrayByUser, getEvents, getEventById } from "./EventProvider.js";
import { EventCard, EventCardFirst } from "./Event.js";
import { eventWeather } from "../weather/WeatherSelect.js";


const eventHub = document.querySelector(".container");

export const EventList = () => {
    const contentTarget = document.querySelector(".eventFeed");
    const user = parseInt(sessionStorage.getItem("activeUser"));

    const evArray = getEventsArrayByUser(user);
    evArray.sort((evOne, evTwo) => {
        const [yearOne, dayOne, monthOne] = evOne.eventDate.split("-")
        const [yearTwo, dayTwo, monthTwo] = evTwo.eventDate.split("-")
        return (parseInt(yearOne) + parseInt(dayOne) + parseInt(monthOne)) -
            (parseInt(yearTwo) + parseInt(dayTwo) + parseInt(monthTwo));
    })

    const [month, date, year] = new Date().toLocaleDateString("en-US").split("/")
    evArray.forEach(ev => {
        const [evYear, evDay, evMonth] = ev.eventDate.split("-")

        if ((parseInt(evYear) + parseInt(evDay) + parseInt(evMonth)) <
            (parseInt(month) + parseInt(date) + parseInt(year))) {
            eventHub.dispatchEvent(new CustomEvent("deleteEventEvent", {
                detail: {
                    eventId: ev.id
                }
            }));
        }
    })

    let htmlRep = "<h2>Event List</h2>"
    htmlRep += evArray.map((ev, i) => {
        if (i === 0)
            return `${EventCardFirst(ev)}${AddDeleteButton(ev)}${AddWeatherButton(ev)}`
        else
            return `${EventCard(ev)}${AddDeleteButton(ev)}${AddWeatherButton(ev)}`
    }).join("");
    contentTarget.innerHTML = htmlRep;
}

eventHub.addEventListener("eventListStateChanged", e => {
    getEvents()
        .then(EventList);
})

const AddDeleteButton = ev => {
    // Only add a delete button if the active user created this event.
    if (ev.userId === +sessionStorage.getItem("activeUser"))
        return `<button id="deleteEvent--${ev.id}">Delete</button>`;
    else
        return ``;
}

const AddWeatherButton = ev => {
    return `<button id="eventWeather--${ev.id}">Show Weather</button>`;
}

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteEvent")) {
        const [temp, eventId] = e.target.id.split("--");
        eventHub.dispatchEvent(new CustomEvent("deleteEventEvent", {
            detail: {
                eventId
            }
        }))
    }
    if (e.target.id.startsWith("eventWeather")) {
        const [temp, eventId] = e.target.id.split("--");
        const ev = getEventById(parseInt(eventId));
        const eventDates = Date.parse(ev.eventDate)
        const todayDate= Date.now()
        const difference = (eventDates - todayDate) / (1000 * 60 * 60 * 24)
        console.log(eventDates)
        console.log(todayDate)
        console.log(difference)
        eventWeather(ev.eventCity, ev.eventState);
    }
})