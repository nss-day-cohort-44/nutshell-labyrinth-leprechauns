/*  Author: Devin Kent
    Purpose: Draw an individual event card.
*/

export const EventCard = ev => {
    if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
        return `<div class="eventCard"><p>${ev.name}</p> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></div>`
    else
        return `<div class="eventCardFriend"><p>${ev.name}</p> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></div>`
}

export const EventCardFirst = ev => {
    if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
        return `<div class="eventCard nonOffensive"><p><b>${ev.name}</p> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></b></div>`
    else
        return `<div class="eventCardFriend nonOffensive"><p><b>${ev.name}</p> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></b></div>`
}