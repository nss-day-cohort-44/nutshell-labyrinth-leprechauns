/*  Author: Devin Kent
    Purpose: Draw the form for adding a new event, dispatch JS events to EventProvider.js.
*/

const eventHub = document.querySelector(".container");

export const EventForm = () => {
    const contentTarget = document.querySelector("#createForm");

    // Date().toLocaleDateString("en-US") returns a date like "11/17/2020", so we split this on "/"
    // to get independent variables for the month, day, and year.
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")

    // Create name, location, and date fields, with the date auto-populated with today's date.
    let htmlRep = `<h2>Add An Event</h2>
    <input type="date" id="createForm__eventDate" value="${year}-${month}-${date}">
    <input type="text" id="createForm__eventName" placeholder="Name">
    <input type="text" id="createForm__eventCity" placeholder="City">
    <input type="text" id="createForm__eventState" placeholder="State">
    <button id="createForm__addEventButton">Add Event</button>`;
    contentTarget.innerHTML = htmlRep;
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "createForm__addEventButton") {
        // Create a detail object to pass to our addEvent function.
        const detail = {
            eventDate: document.querySelector("#createForm__eventDate").value,
            eventName: document.querySelector("#createForm__eventName").value,
            eventCity: document.querySelector("#createForm__eventCity").value,
            eventState: document.querySelector("#createForm__eventState").value,
            userId: sessionStorage.getItem("activeUser")
        }
        // If one of the fields is empty, display an error and halt function execution.
        if(!detail.eventDate || !detail.eventName || !detail.eventCity || !detail.eventState) {
            window.alert("Please fill out all fields before submitting your event.")
            return;
        }
        eventHub.dispatchEvent(new CustomEvent("addEventEvent", {
            detail
        }));
    }
    // Redraw the event form with empty fields after an event has been added.
    if(e.target.id === "eventButton") {
        EventForm();
    }
})