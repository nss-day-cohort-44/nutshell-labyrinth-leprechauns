// Silas-renders the chat input and messages, saves messages to api and rerenders messages to the dom

import { getUserByUsername, getUsers, useUsers } from "../users/UserProvider.js"
import { Message } from "./Message.js"
import { getMessages, saveMessage, useMessages, deleteMessage } from "./chatProvider.js"
import { renderMessageForm } from "./ChatForm.js"
import { addFriend } from "../friends/FriendProvider.js"
import { getUserByUserId } from "../users/UserProvider.js"

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
      const filteredMessages = messages.filter(message => {
        if(message.privateId !== 0) {
          if(message.privateId === parseInt(sessionStorage.getItem("activeUser")) ||
          message.userId === parseInt(sessionStorage.getItem("activeUser"))) {
            return true;
          }
        } else {
          return true;
        }
      })
      render(filteredMessages, users, messagesTarget)
      const messagesInputTarget = document.querySelector(".asideRight__chat__input")
      renderMessageForm(messagesInputTarget)
    })
}

eventHub.addEventListener("chatStateChanged", (event) => {
  ChatList()
})

eventHub.addEventListener("friendListStateChanged", (event) => {
  ChatList()
})

// MAps over the messages and uses find to create a user obj that corrosponds with the userId in the message. Then runs the message and user objects through the Message() to render the info to the DOM element

const render = (messagesArr, userArr, target) => {
  target.innerHTML = `
<h4>~Chats~</h4>
<div class="asideRight__chat__output">
${messagesArr
  .map((message) => {
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

// On post btn click the entry is saved to api and the chat is rerendered with a fresh input and updated messages

eventHub.addEventListener("click", (e) => {
  if (e.target.id === "messageInputBtn") {
    const userId = sessionStorage.activeUser
    const messageText = document.querySelector("#messageInput").value
    let privateId = 0;
    if(messageText.startsWith("@")) {
      const user = getUserByUsername(messageText.slice(1, messageText.indexOf(" ")))
      if(user)
        privateId = user.id;
    }
    const time = Date.now()
    const newMessage = {
      "userId": parseInt(userId),
      "message": messageText,
      "postTime": time,
      "privateId": privateId
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

eventHub.addEventListener("click", (e) => {
  if (e.target.id.startsWith("addFriendFromMessage")) {
    const [temp, friendId] = e.target.id.split("--")
    const addFriend = new CustomEvent("addFriendEvent", {
      detail: {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        friendId: parseInt(friendId),
      },
    })
    ChatList()
    eventHub.dispatchEvent(addFriend)
    if (
      window.confirm(
        `Do you really want to add ${getUserByUserId(parseInt(friendId)).username} to your friends?`
      )
    ) {
      const addFriend = new CustomEvent("addFriendEvent", {
        detail: {
          userId: parseInt(sessionStorage.getItem("activeUser")),
          friendId: parseInt(friendId),
        },
      })
      eventHub.dispatchEvent(addFriend)
    }
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
