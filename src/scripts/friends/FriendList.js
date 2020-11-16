import { getUserByUserId } from "../users/UserProvider.js";
import { Friend } from "./Friend.js";
import { getFriendArrayByUser, getFriends } from "./FriendProvider.js"

const contentTarget = document.querySelector(".asideRight__friendsList");
const eventHub = document.querySelector(".container");

let userId;

export const FriendList = () => {
    // Find the user we are displaying for. Forced to be user 1 until auth is added.
    // userId = sessionStorage.getItem(`activeUser`)
    userId = 1;
    // Get an array of all this user's friends (see FriendProvider module), then get an array of
    // user objects from the friends (see UserProvider module).
    const friendArr = getFriendArrayByUser(userId).map(fr => getUserByUserId(fr.followingId));
    let htmlRep = "<h3>Friends List</h3>";
    htmlRep += AddFriendButton();
    htmlRep += `<ul>${friendArr.map(fr => `${Friend(fr)}${AddDeleteButton(fr.id)}`).join("")}</ul>`;
    contentTarget.innerHTML = htmlRep;
}

const AddFriendButton = () => {
    return "<button>Add Friend</button>";
}

const AddDeleteButton = (id) => {
    return `<button id="deleteFriend--${id}">Delete</button>`;
}

// Listen for the delete user button being clicked. Dispatch an event containing the friend id and
// the active user id.
eventHub.addEventListener("click", e => {
    if(e.target.id.startsWith("deleteFriend--")) {
        const [temp, friendId] = e.target.id.split("--");
        const deleteEvent = new CustomEvent("deleteFriendEvent", {
            detail: {
                userId,
                friendId: parseInt(friendId)
            }
        })
        eventHub.dispatchEvent(deleteEvent);
    }
})

eventHub.addEventListener("friendListStateChanged", e => {
    getFriends()
        .then(FriendList);
})