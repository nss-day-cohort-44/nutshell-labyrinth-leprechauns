// Silas, generates the messages

export const Message = (userObj, messageObj) => {
  return `
  <p>${userObj.username}: ${messageObj.message} ${AddDeleteButton(messageObj)}</p>
  `
}
const AddDeleteButton = (messageObj) => {
  // Only add a delete button if the active user created this event.
  if (messageObj.userId === +sessionStorage.getItem("activeUser"))
    return `<button id="deleteMessage--${messageObj.id}" class="btn">Delete</button>`
  else return ``
}
