import { getUserByUserId } from "../users/UserProvider.js";

let friends = [];

const eventHub = document.querySelector(".container")

export const useFriends = () => friends.slice();

export const getFriends = () => {
    return fetch(`http://localhost:8088/friends`)
        .then(response => response.json())
        .then(response => friends = response);
}

const dispatchStateChange = () => {
    eventHub.dispatchEvent(new CustomEvent("friendListStateChanged"))
}

export const getFriendArrayByUser = user => {
    if (typeof (user) === "number")
        return useFriends().filter(fr => fr.userId === user)
    else if (typeof (user) === "object")
        return useFriends().filter(fr => fr.userId === user.id)

    return undefined;
}

export const getFriendByUserFriendIds = (user, friend) =>
    useFriends().find(fr => fr.userId === user && fr.followingId === friend)

export const addFriend = (user, friend) => {

    if (!getFriendByUserFriendIds(user.id, friend.id)) {
        const addFriendEvent = new CustomEvent
        return fetch(`http://localhost:8088/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                userId: user.id,
                followingId: friend.id
            }
        }).then(getFriends)
    }
}

export const deleteFriend = (user, friend) => {
    const friendToDelete = getFriendByUserFriendIds(user, friend);
    console.log(friendToDelete)
    return fetch(`http://localhost:8088/friends/${friendToDelete.id}`, {
        method: "DELETE"
    })
}

eventHub.addEventListener("deleteFriendButtonClicked", e => {
    console.log("event fired", e)
    deleteFriend(e.detail.userId, e.detail.friendId);
    dispatchStateChange();
});