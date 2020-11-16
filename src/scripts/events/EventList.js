import { getEventsArrayByUser, getEvents } from "./EventProvider.js";
import { EventCard } from "./Event.js";


const eventHub = document.querySelector(".container");

export const EventList = () => {
    const contentTarget = document.querySelector(".eventFeed");
    const user = parseInt(sessionStorage.getItem("activeUser"));

    const evArray = getEventsArrayByUser(user);
    let htmlRep = "<h2>Event List</h2>"
    htmlRep += evArray.map(ev => `${EventCard(ev)}${AddDeleteButton(ev.id)}`).join("");
    contentTarget.innerHTML = htmlRep;
}

eventHub.addEventListener("eventListStateChanged", e => {
    getEvents()
    .then(EventList);
})

const AddDeleteButton = id => {
    return `<button id="deleteEvent--${id}">Delete</button>`;
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
})