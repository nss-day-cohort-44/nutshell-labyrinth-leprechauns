let messages = []
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const noteStateChangeEvent = new CustomEvent("noteStateChanged")
  eventHub.dispatchEvent(noteStateChangeEvent)
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
  debugger
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
