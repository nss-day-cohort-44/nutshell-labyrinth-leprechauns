// Silas, generates the messages

export const Message = (userObj, messageObj) => {
  return `
  <p>${userObj.username}: ${messageObj.message} <button id="deleteMessage--${messageObj.id}" class="btn">delete</button></p>
  `
}
