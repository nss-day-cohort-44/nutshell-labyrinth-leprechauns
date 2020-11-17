let messages = []
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const chatStateChangeEvent = new CustomEvent("chatStateChanged")
  eventHub.dispatchEvent(chatStateChangeEvent)
}

export const useMessages = () => {
  return messages.slice()
}

export const getMessages = () => {
  return fetch("http://localhost:8088/messages")
    .then((response) => response.json())
    .then((parsedMesssages) => {
      messages = parsedMesssages
      console.log(messages)
    })
}

export const saveMessage = (message) => {
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
