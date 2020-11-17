import { renderNewsButton } from "./NewsButton.js"
import { newsArticleCard } from "./NewsCard.js"
import { deleteNews, getNews, useNews, getNewsArrayByUser } from "./NewsDataProvider.js"
import { useFriends, getFriendArrayByUser, getFriends } from "../friends/FriendProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("newsStateChanged", () =>NewsList())

export const NewsList = () =>{
    
    getNews()
    .then(getFriends)
    .then(() =>{
        const allArticles = useNews()
        // debugger
        const friendsArray = getFriendArrayByUser(+sessionStorage.getItem("activeUser"))
        const filteredArticles = allArticles.filter(fr => {
            if(fr.userId === +sessionStorage.getItem("activeUser")) {
                return true 
            } else 
            {return friendsArray.find(f => f.followingId === fr.userId)}
        })
        render(filteredArticles)
    })
}

const render = (articleArray) =>{
    const contentTarget = document.querySelector('.centerBody__newsFeed')
    const user = parseInt(sessionStorage.getItem("activeUser"));
    const evArray = getNewsArrayByUser(user);
    let articleHTMLRep = "<h2>News List</h2>"
    articleHTMLRep += evArray.map(ev => `${newsArticleCard(ev)}`).join("")
    contentTarget.innerHTML =`${articleHTMLRep}`
}
// const evArray = getEventsArrayByUser(user);
//     let htmlRep = "<h2>Event List</h2>"
//     htmlRep += evArray.map(ev => `${EventCard(ev)}${AddDeleteButton(ev)}`).join("");
//     contentTarget.innerHTML = htmlRep;


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