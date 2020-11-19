/*  Author: Devin Kent
    Purpose: Draw an individual event card.
*/

export const EventCard = ev => {
    if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
        return `<div class="eventCard"><h4>${ev.name}</h4> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></div>`
    else
        return `<div class="eventCardFriend"><h4>${ev.name}</h4> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></div>`
}

export const EventCardFirst = ev => {
    if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
        return `<div class="eventCard nonOffensive"><h4><b>${ev.name}</h4> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></b></div>`
    else
        return `<div class="eventCardFriend nonOffensive"><h4><b>${ev.name}</h4> <p>${ev.eventCity}, ${ev.eventState}</p> <p>${ev.eventDate}</p></b></div>`
}