// Silas-renders the chat input and messages, saves messages to api and rerenders messages to the dom

import { getUsers, useUsers } from "../users/UserProvider.js"
import { Message } from "./Message.js"
import { getMessages, saveMessage, useMessages, deleteMessage } from "./chatProvider.js"
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

eventHub.addEventListener("chatStateChanged", (event) => {
  ChatList()
})

// MAps over the messages and uses find to create a user obj that corrosponds with the userId in the message. Then runs the message and user objects through the Message() to render the info to the DOM element

const render = (messagesArr, userArr, target) => {
  target.innerHTML = `
<h4>Chats</h4>
<div class="asideRight__chat__output">
${messagesArr
  .map((message) => {
    console.log(message)
    const messageAuthor = userArr.find((user) => {
      return user.id === message.userId
    })
    return Message(messageAuthor, message)
  })
  .join("")}
  </div>
  <div class="asideRight__chat__input">
 </div>
 `
}

// On post byn click the entry is saved to api and the chat is rerendered with a fresh input and updated messages

eventHub.addEventListener("click", (e) => {
  if (e.target.id === "messageInputBtn") {
    const userId = sessionStorage.activeUser
    const messageText = document.querySelector("#messageInput").value
    const time = Date.now()
    const newMessage = {
      "userId": parseInt(userId),
      "message": messageText,
      "postTime": time,
    }
    saveMessage(newMessage)
    ChatList()
  }
})

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteMessage--")) {
    const [prefix, id] = clickEvent.target.id.split("--")
    deleteMessage(id).then(() => {
      const updateMessages = useMessages()
      ChatList()
    })
  }
})

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteEntry--")) {
    const [prefix, id] = clickEvent.target.id.split("--")
    /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    deleteEntry(id).then(() => {
      const updatedEntries = useJournalEntries()
      render(updatedEntries)
    })
  }
})
