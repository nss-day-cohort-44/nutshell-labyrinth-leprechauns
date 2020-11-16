const eventHub = document.querySelector(".container");

export const EventForm = () => {
    const contentTarget = document.querySelector("#createForm");

    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")

    let htmlRep = `<h2>Add An Event</h2>
    <input type="date" id="createForm__eventDate" value="${year}-${month}-${date}">
    <input type="text" id="createForm__eventName" placeholder="Name">
    <input type="text" id="createForm__eventLocation" placeholder="Location">
    <button id="createForm__addEventButton">Add Event</button>`;
    contentTarget.innerHTML = htmlRep;
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "createForm__addEventButton") {
        const detail = {
            eventDate: document.querySelector("#createForm__eventDate").value,
            eventName: document.querySelector("#createForm__eventName").value,
            eventLocation: document.querySelector("#createForm__eventLocation").value,
            //userId: sessionStorage.getItem("activeUser")
            userId: 1
        }
        eventHub.dispatchEvent(new CustomEvent("addEventEvent", {
            detail
        }));
    }
    if(e.target.id === "eventButton") {
        EventForm();
    }
})