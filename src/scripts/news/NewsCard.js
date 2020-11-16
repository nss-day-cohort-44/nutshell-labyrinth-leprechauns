export const newsArticleCard = (article) => {
    return `
        <section id="article--${article.id}"  class="articleCard" value="${article.id}">
            
                <h4>${article.titleOfArticle}<h4>
                <p>About: ${article.synopsisOfArticle}</p>
                <p>Url: <a href="${article.urlOfArticle}" target="_blank">${article.titleOfArticle}</a></p>
                <p>Posted by: ${article.user.username}</p>
                <div class="delete">
                <button class="deleteButton" id="deleteArticle--${article.id}">Delete</button>
                <button class="editButton" id="editArticle--${article.id}">Edit</button>
                </div>
        </section>
    `
}

{/* <p>Posted by: ${article.user.userName}</p>  will be added when everthing is compiled properly*/}
