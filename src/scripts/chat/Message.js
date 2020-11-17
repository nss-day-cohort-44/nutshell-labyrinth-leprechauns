export const Message = (userObj, messageObj) => {
  return `
  <div class="message">
  <p>${userObj.username}: ${messageObj.message} <button id="deleteMessage--${messageObj.id}" class="btn">Delete</button></p>
  
  </div>
  `
}
