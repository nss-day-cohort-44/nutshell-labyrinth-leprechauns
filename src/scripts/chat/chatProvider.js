import { ChatList } from "./ChatList.js"
let messages = []

// A local copy of the timestamp of the most recent chat message
let mostRecentChat = 0;

const eventHub = document.querySelector(".container")

// Listen for the storage event that fires every time localStorage is updated. If our local most recent
// timestamp is lower than the timestamp in localStorage, update our chat list.
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
  // Update our local most recent time stamp if the new message's timestamp is higher (not guaranteed,
  // because messages are sent asynchronously)
  if (useMostRecentChat() < message.postTime)
    setMostRecentChat(message.postTime)
  // Compare timestamps to see if we need to update localStorage's timestamp
  if (parseInt(localStorage.getItem("mostRecentChatMessage")) < useMostRecentChat()) {
    localStorage.setItem("mostRecentChatMessage", useMostRecentChat())
  }
  // If localStorage does not have a timestamp at all, add one.
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
