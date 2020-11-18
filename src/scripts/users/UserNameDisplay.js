import { getUserByUserId } from "./UserProvider.js"

export const displayName = () =>{
    const contentTarget = document.querySelector(".asideLeft__user")
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
   const userObj = getUserByUserId(activeUser)

   contentTarget.innerHTML = `<h2>Hello, ${userObj.username}</h2>`
    
    
}
