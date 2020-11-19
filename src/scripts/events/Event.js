/*  Author: Devin Kent
    Purpose: Draw an individual event card.
*/

export const EventCard = (ev) => {
  if (ev.userId === parseInt(sessionStorage.getItem("activeUser")))
    return `<div class="eventCard"><p>${ev.name}</p> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${
      ev.eventDate
    }</p><button id="editEventButton--${ev.id}">Edit</button>
    ${AddDeleteButton(ev)}${AddWeatherButton(ev)}</div>`
  else
    return `<div class="eventCardFriend"><p>${ev.name}</p> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></div>`
}

export const EventCardFirst = (ev) => {
  if (ev.userId === parseInt(sessionStorage.getItem("activeUser")))
    return `<div class="eventCard nonOffensive"><p><b>${ev.name}</p> <p>${ev.eventCity}, ${
      ev.eventState
    }</p> <p>${ev.eventDate}</p></b><button id="editEventButton--${
      ev.id
    }">Edit</button> ${AddDeleteButton(ev)}${AddWeatherButton(ev)}</div></div>`
  else
    return `<div class="eventCardFriend nonOffensive"><p><b>${ev.name}</p> <p>${ev.eventCity}, ${
      ev.eventState
    }</p> <p>${ev.eventDate}</p></b>${AddWeatherButton(ev)}</div>`
}

const AddDeleteButton = (ev) => {
  // Only add a delete button if the active user created this event.
  if (ev.userId === +sessionStorage.getItem("activeUser"))
    return `<button id="deleteEvent--${ev.id}">Delete</button>`
  else return ``
}

const AddWeatherButton = (ev) => {
  const eventDates = Date.parse(ev.eventDate)
  const todayDate = Date.now()
  const difference = (eventDates - todayDate) / (1000 * 60 * 60 * 24)
  if (difference < 7) {
    return `<button id="eventWeather--${ev.id}">Show Weather</button>`
  } else {
    return ""
  }
}
