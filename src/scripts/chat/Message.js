// Silas, generates the messages in the caht window

import { getFriends, useFriends } from "../friends/FriendProvider.js"

export const Message = (userObj, messageObj) => {
  return addNameButton(messageObj, userObj)
}
const AddDeleteButton = (messageObj) => {
  // Only add a delete button if the active user created this event.
  if (messageObj.userId === +sessionStorage.getItem("activeUser"))
    return `<button id="deleteMessage--${messageObj.id}" class="btn">Delete</button>`
  else return ``
}

const addNameButton = (messageObj, userObj) => {
  return getFriends().then(() => {
    // relationship objects
    const relationships = useFriends()

    // relationships for current user
    const relatedFriends = relationships.filter((relationship) => {
      return relationship.userId === +sessionStorage.activeUser
    })
    // finds determines if the message was written by a friend
    const matchingFriend = relatedFriends.find((friend) => {
      return friend.followingId === messageObj.userId
    })

    if (!matchingFriend) {
      return `<p>${userObj.username}: ${messageObj.message} ${AddDeleteButton(messageObj)}`
    } else {
      return `<button><p>${userObj.username}</button>: ${messageObj.message} ${AddDeleteButton(
        messageObj
      )}`
    }
  })
}
