/*  Author: Devin Kent
    Purpose: Draw an individual event card.
*/

export const EventCard = ev => {
    return `<div class="eventCard">${ev.name} ${ev.location} ${ev.eventDate}</div>`
}