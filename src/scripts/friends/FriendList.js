import { getUserByUserId } from "../users/UserProvider.js";
import { Friend } from "./Friend.js";
import { getFriendArrayByUser, getFriends } from "./FriendProvider.js"

const contentTarget = document.querySelector(".asideRight__friendsList");
const eventHub = document.querySelector(".container");

let userId;

export const FriendList = () => {
    //    userId = sessionStorage.getItem(`activeUser`)
    userId = 1;
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

eventHub.addEventListener("click", e => {
    if(e.target.id.startsWith("deleteFriend--")) {
        const [temp, friendId] = e.target.id.split("--");
        const deleteEvent = new CustomEvent("deleteFriendButtonClicked", {
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