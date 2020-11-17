export const Message = (userObj, messageObj) => {
  console.log("US", userObj, "MES", messageObj)
  return `<p>${userObj.username}: ${messageObj.message}</p>`
}
