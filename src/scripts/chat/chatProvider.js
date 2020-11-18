import { ChatList } from "./ChatList.js"
let messages = []
let mostRecentChat = 0;

const eventHub = document.querySelector(".container")

addEventListener("storage", e => {
  if(useMostRecentChat() < parseInt(localStorage.getItem("mostRecentChatMessage"))) {
    getMessages()
    .then(ChatList)
  }
})

const dispatchStateChangeEvent = () => {
  const chatStateChangeEvent = new CustomEvent("chatStateChanged")
  eventHub.dispatchEvent(chatStateChangeEvent)
}

export const useMostRecentChat = () => mostRecentChat;

export const setMostRecentChat = time => mostRecentChat = time;

export const useMessages = () => {
  return messages.slice().sort((a, b) => b.postTime - a.postTime)
}

export const getMessages = () => {
  return fetch("http://localhost:8088/messages")
    .then((response) => response.json())
    .then((parsedMesssages) => {
      messages = parsedMesssages
    })
}

export const saveMessage = (message) => {
  if (useMostRecentChat() < message.postTime)
    setMostRecentChat(message.postTime)

  if (parseInt(localStorage.getItem("mostRecentChatMessage")) < useMostRecentChat()) {
    console.log("most recent: ", useMostRecentChat())
    localStorage.setItem("mostRecentChatMessage", useMostRecentChat())
  }

  if(!localStorage.getItem("mostRecentChatMessage"))
  localStorage.setItem("mostRecentChatMessage", useMostRecentChat())

  return fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then(getMessages)
    .then(dispatchStateChangeEvent)
}

export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:8088/messages/${messageId}`, {
    method: "DELETE",
  }).then(getMessages)
}
