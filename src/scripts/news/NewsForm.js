// authored by kyle simmons. this module renders the news form

import { saveNews } from "./NewsDataProvider.js"

const eventHub = document.querySelector(".container")
// event to hear click from the post news article button. responds by rendering the html for the button
export const newsClickEventHeard = () =>{
    
    eventHub.addEventListener("postArticleButtonClicked", event =>{
        // console.log("Post Article click heard")
        const contentTarget = document.querySelector("#createForm")
        contentTarget.innerHTML = `<h2>~Post An Article~</h2>
        <h6>Title Of Article</h6>
        <input type="hidden" name="articleId" id="articleId">
        <input type="text" id="titleOfArticle" name="titleOfArticle">
        <h6>Synopsis of Article</h6>
        <input type="text" id="aboutArticle" name="aboutArticle">
        <h6>Url</h6>
        <input type="text" id="articleUrl" name="articleUrl">
        <br><br>
        <button id="saveNewsArticle">Post</button>
        `
    })
}
// sends object to the api based off of the filled in form components
eventHub.addEventListener("click", clickEvent =>{
    const contentTarget = document.querySelector("#createForm")
    const id = document.querySelector("#articleId")
    if(clickEvent.target.id === "saveNewsArticle"){
        const titleOfArticle = document.querySelector("#titleOfArticle").value
            const synopsisOfArticle = document.querySelector("#aboutArticle").value
            const urlOfArticle = document.querySelector("#articleUrl").value
        if(id.value === "" && titleOfArticle !== "" && synopsisOfArticle !== "" && urlOfArticle !== ""){ 
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
        .then(contentTarget.innerHTML =`<h2>~Post An Article~</h2>
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
    }else{window.alert("Please fill out all fields before submitting your article")
                return;
            }}
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

