export const newsArticleCard = (article) => {
    return `
        <section id="article--${article.id}"  class="articleCard" value="${article.id}">
            
                <h4>${article.titleOfArticle}<h4>
                <p>About: ${article.synopsisOfArticle}</p>
                <p>Url: ${article.urlOfArticle}</p>
                <div class="delete">
                <button class="deleteButton" id="deleteArticle--${article.id}">Delete</button>
                <button class="editButton" id="editArticle--${article.id}">Edit</button>
                </div>
        </section>
    `
}