import { saveNews } from "./NewsDataProvider.js"

const contentTarget = document.querySelector("#createForm")
const eventHub = document.querySelector(".container")
export const newsClickEventHeard = () =>{

    eventHub.addEventListener("postArticleButtonClicked", event =>{
        // console.log("Post Article click heard")
        contentTarget.innerHTML = `
        <h6>Title Of Article</h6>
        <input type="hidden" name="articleId" id="articleId">
        <input type="text" id="titleOfArticle" name="titleOfArticle">
        <h6>Synopsis of Article</h6>
        <input type="text" id="aboutArticle" name="aboutArticle">
        <h6>Url</h6>
        <input type="text" id="articleUrl" name="articleUrl">
        <br>
        <button id="saveNewsArticle">Post</button>
        `
    })
}

eventHub.addEventListener("click", clickEvent =>{
    const id = document.querySelector("#articleId")
    if(clickEvent.target.id === "saveNewsArticle" && id.value === ""){
        const timeOfArticlePost = Date.now()
        const titleOfArticle = document.querySelector("#titleOfArticle").value
        const synopsisOfArticle = document.querySelector("#aboutArticle").value
        const urlOfArticle = document.querySelector("#articleUrl").value
        const userId = +sessionStorage.getItem("activeUser")
        
        const newArticlePost = {
            titleOfArticle,
            synopsisOfArticle,
            urlOfArticle,
            timeOfArticlePost,
            userId
        }
        saveNews(newArticlePost)
        .then(contentTarget.innerHTML =`
        <h6>Title Of Article</h6>
        <input type="hidden" name="articleId" id="articleId">
        <input type="text" id="titleOfArticle" name="titleOfArticle">
        <h6>Synopsis of Article</h6>
        <input type="text" id="aboutArticle" name="aboutArticle">
        <h6>Url</h6>
        <input type="text" id="articleUrl" name="articleUrl">
        <br>
        <button id="saveNewsArticle">Post</button>
        `)
    }
    // else if(clickEvent.target.id === "saveNewsArticle" && document.querySelector("#titleOfArticle").value !== "" && document.querySelector("#aboutArticle") !== "" && document.querySelector("#articleUrl")){
    //     const timeOfArticlePost = Date.now()
    //     const titleOfArticle = document.querySelector("#titleOfArticle").value
    //     const synopsisOfArticle = document.querySelector("#aboutArticle").value
    //     const urlOfArticle = document.querySelector("#articleUrl").value
    //     const userId = +sessionStorage.getItem("activeUser")
    //     const id = document.querySelector("#articleId").value
    //     const newArticlePost = {
    //         titleOfArticle,
    //         synopsisOfArticle,
    //         urlOfArticle,
    //         timeOfArticlePost,
    //         userId
    //     }
    //     editNews(newArticlePost, id)
    // }
})

