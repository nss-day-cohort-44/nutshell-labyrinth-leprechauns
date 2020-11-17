/*  Author: Devin Kent
    Purpose: Draw an individual event card.
*/

export const EventCard = ev => {
    return `<div class="eventCard">${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</div>`
}