let news = []

export const getNews= () =>{
    return fetch("http://localhost:8088/articles?_expand=users")
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
        method: "DELETE",
    })
        .then(getNews)
}

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () =>{
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")
        
    eventHub.dispatchEvent(newsStateChangedEvent)
}