import { getUsers, useUsers } from "../users/UserProvider.js"
import { Message } from "./Message.js"
import { getMessages, saveMessage, useMessages } from "./chatProvider.js"
import { renderMessageForm } from "./ChatForm.js"

const eventHub = document.querySelector(".container")

let messages = []
let users = []

// Gets the users and messages arrays from api, then parsed the array into json and puts in variable. Uses the variables to render the HTML
export const ChatList = () => {
  const messagesTarget = document.querySelector(".asideRight__chat")
  return getMessages()
    .then(getUsers)
    .then(() => {
      messages = useMessages()
      users = useUsers()
      render(messages, users, messagesTarget)
      const messagesInputTarget = document.querySelector(".asideRight__chat__input")
      renderMessageForm(messagesInputTarget)
    })
}

// MAps over the messages and uses find to create a user obj that corrosponds with the userId in the message. Then runs the message and user objects through the Message() to render the info to the DOM element

const render = (messagesArr, userArr, target) => {
  target.innerHTML = `
<h4>Chats</h4>
${messagesArr
  .map((message) => {
    const messageAuthor = userArr.find((user) => {
      return user.id === message.userId
    })
    return Message(messageAuthor, message)
  })
  .join("")}
  <div class="asideRight__chat__input">
 </div>
 `
}

eventHub.addEventListener("click", (e) => {
  if (e.target.id === "messageInputBtn") {
    const userId = sessionStorage.activeUser
    const messagesTarget = document.querySelector(".asideRight__chat")
    const messageText = document.querySelector("#messageInput").value
    const newMessage = {
      "userId": parseInt(userId),
      "message": messageText,
    }
    saveMessage(newMessage)
    render(messages, users, messagesTarget)
  }
})
