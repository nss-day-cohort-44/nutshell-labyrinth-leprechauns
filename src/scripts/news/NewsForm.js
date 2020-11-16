import { saveNews } from "./NewsDataProvider.js"

const contentTarget = document.querySelector("#createForm")
const eventHub = document.querySelector(".container")
export const newsClickEventHeard = () =>{

    eventHub.addEventListener("postArticleButtonClicked", event =>{
        // console.log("Post Article click heard")
        contentTarget.innerHTML = `
        <h6>Title Of Article</h6>
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
    if(clickEvent.target.id === "saveNewsArticle" && document.querySelector("#titleOfArticle").value !== "" && document.querySelector("#aboutArticle") !== "" && document.querySelector("#articleUrl") !== ""){
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
    }else if (clickEvent.target.id === "saveNewsArticle" && !document.querySelector("#titleOfArticle").value || !document.querySelector("#aboutArticle") || !document.querySelector("#articleUrl")){
        window.alert("Please fill out the entire form")
    }
})