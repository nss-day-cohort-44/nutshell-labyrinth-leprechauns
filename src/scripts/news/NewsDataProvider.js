import {getFriendArrayByUser} from '../friends/FriendProvider.js'

let news = []

export const getNews= () =>{
    return fetch("http://localhost:8088/articles?_expand=user")
    .then(response => response.json())
    .then(
        parsedNews =>{
            news = parsedNews
        }
    )
}

export const useNews = () => {
    const sortedByDate = news.sort(
        (currentPost, nextPost) =>
            Date.parse(currentPost.date) - Date.parse(nextPost.date)
    )
    return sortedByDate
}

export const saveNews = news => {
    return fetch('http://localhost:8088/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })
    .then(getNews)
    .then(dispatchStateChangeEvent)
}

export const deleteNews = newsId => {
    
    return fetch(`http://localhost:8088/articles/${newsId}`, {
        method: "DELETE"
    })
        .then(getNews)
}

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () =>{
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")

    eventHub.dispatchEvent(newsStateChangedEvent)
}

export const getNewsArrayByUser = user => {
    // Get a list of this user's friends.
    const friends = getFriendArrayByUser(user);
    if (typeof (user) === "number") {
        // Loop through all events
        return useNews().filter(ev => {
            // If the event's userId matches the user, return it
            if (user === ev.userId) {
                return true;
            } else {
                // Otherwise, loop through the friends of this user and see if any friends
                // match the ID of event's userId.
                return friends.find(fr => fr.followingId === ev.userId)
            }
        })
    }
}