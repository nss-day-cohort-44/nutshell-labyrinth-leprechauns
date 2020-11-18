export const newsArticleCard = (article) => {
    if (article.userId === +sessionStorage.getItem("activeUser")){

        return `
        <section id="article--${article.id}"  class="articleCard" value="${article.id}">
        
        <h4>${article.titleOfArticle}<h4>
        <p>About: ${article.synopsisOfArticle}</p>
        <p>Url: <a href="${article.urlOfArticle}" target="_blank">${article.titleOfArticle}</a></p>
        <p>Posted by: ${article.user.username}</p>
        <div class="delete">
        ${renderDeleteButton(article)}
        </div>
        </section>
        `
    } else {
        return  `
        <section id="article--${article.id}"  class="articleCard " value="${article.id}">
        <h4>${article.titleOfArticle}<h4>
        <p>About: ${article.synopsisOfArticle}</p>
        <p>Url: <a href="${article.urlOfArticle}" target="_blank">${article.titleOfArticle}</a></p>
        <p>Posted by: ${article.user.username}</p>
        <div class="delete">
        ${renderDeleteButton(article)}
        </div>
        </section>
        `
    }
}

{/* <p>Posted by: ${article.user.userName}</p>  will be added when everthing is compiled properly*/}

const renderDeleteButton = (article) =>{
    if (article.userId === +sessionStorage.getItem("activeUser")){
        return ` <button class="deleteButton" id="deleteArticle--${article.id}">Delete</button>`
    }else{
        return ``
    }
}

// export const EventCard = ev => {
//     if(ev.userId === parseInt(sessionStorage.getItem('activeUser')))
//         return `<div class="eventCard">${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</div>`
//     else
//         return `<div class="eventCardFriend">${ev.name} ${ev.eventCity}, ${ev.eventState} ${ev.eventDate}</div>`
// }