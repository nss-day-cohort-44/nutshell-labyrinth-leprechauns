import { getMessages, useMessages } from "./chatProvider.js"
// const messagesTarget = document.querySelector(".asideRight__chat")

export const ChatList = () => {
  const messagesTarget = document.querySelector(".asideRight__chat")
  return getMessages().then(() => {
    const messages = useMessages()
    render(messages, messagesTarget)
  })
}

const render = (messagesArr, target) => {
  target.innerHTML = `
<h4>Chats</h4>
${messagesArr.map((message) => `<p>User: ${message.message}</p>`).join("")}`
}
