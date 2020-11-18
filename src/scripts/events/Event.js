/*  Author: Devin Kent
    Purpose: Draw an individual event card.
*/

export const EventCard = ev => {
    if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
        return `<div class="eventCard">${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</div>`
    else
        return `<div class="eventCardFriend">${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</div>`
}

export const EventCardFirst = ev => {
    if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
        return `<div class="eventCard"><b>${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</b></div>`
    else
        return `<div class="eventCardFriend"><b>${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</b></div>`
}