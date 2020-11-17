import { renderNewsButton } from "./NewsButton.js"
import { newsArticleCard } from "./NewsCard.js"
import { deleteNews, getNews, useNews } from "./NewsDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("newsStateChanged", () =>NewsList())

export const NewsList = () =>{
    getNews()
    .then(() =>{
        const allArticles = useNews()
        render(allArticles)
    })
}

const render = (articleArray) =>{
    const contentTarget = document.querySelector('.centerBody__newsFeed')
    let articleHTMLRep = ""
    for (const articleObject of articleArray){
        articleHTMLRep += newsArticleCard(articleObject)
    }
    contentTarget.innerHTML =`${articleHTMLRep}`
}

eventHub.addEventListener("click", event =>{
        if (event.target.id.startsWith("deleteArticle--")){
            const [prefix, id] = event.target.id.split("--")
            
            deleteNews(id).then(
                () =>{
                    const updatedArticles = useNews()
                    render(updatedArticles)
                }
                )
            }
    
})