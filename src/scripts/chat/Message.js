export const Message = (userObj, messageObj) => {
  return `<p>${userObj.username}: ${messageObj.message}</p>
  <button id="deleteMessage--${messageObj.id}">Delete</button>
  `
}
