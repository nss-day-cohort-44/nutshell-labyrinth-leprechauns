let messages = []

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
