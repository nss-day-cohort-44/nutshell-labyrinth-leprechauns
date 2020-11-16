import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { FriendList } from "./friends/FriendList.js"
import { getFriends } from "./friends/FriendProvider.js"
import { getUsers } from "./users/UserProvider.js"

//getFriends().then(getUsers).then(FriendList)

// On page load this function determines if an activeUser is set and if so it renders the main App and if not it renders the login and reg form

const mainBody = document.querySelector(".mainBody")
const auth = document.querySelector(".auth")

sessionStorage.setItem("activeUser", 1);
// If no activeUser, render loging and Registration form

if (!sessionStorage.activeUser) {
  mainBody.classList.add(".hide")
  auth.classList.remove(".hide")
  LoginForm()
  RegisterForm()
}

// If activeUser, render main App

if (sessionStorage.activeUser) {
  //console.log(sessionStorage)
  mainBody.classList.remove(".hide")
  auth.classList.add(".hide")
  Nutshell()
}
