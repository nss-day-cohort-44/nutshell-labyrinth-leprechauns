import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { renderNewsButton } from "./news/NewsButton.js"
import { newsClickEventHeard } from "./news/NewsForm.js"
import { Nutshell } from "./Nutshell.js"
import {displayTaskButton} from "./tasks/TaskButton.js"
import { TaskFormRender } from "./tasks/TaskList.js"
import {TaskList} from "./tasks/TaskList.js"

// LoginForm()
// RegisterForm()

import { FriendList } from "./friends/FriendList.js"
import { getFriends } from "./friends/FriendProvider.js"
import { getUsers } from "./users/UserProvider.js"
import { NewsList } from "./news/NewsList.js"
import { defaultWeather } from "./weather/WeatherSelect.js"




/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
// displayTaskButton()
// TaskFormRender()
// TaskList()


// renderNewsButton()
// newsClickEventHeard()
// On page load this function determines if an activeUser is set and if so it renders the main App and if not it renders the login and reg form

const mainBody = document.querySelector(".mainBody")
const auth = document.querySelector(".auth")
// Nutshell()

// If no activeUser, render loging and Registration form

if (!sessionStorage.activeUser) {
  mainBody.classList.add(".hide")
  auth.classList.remove(".hide")
  LoginForm()
  RegisterForm()
}

// If activeUser, render main App

if (sessionStorage.activeUser) {
  console.log(sessionStorage)
  mainBody.classList.remove(".hide")
  auth.classList.add(".hide")
  Nutshell()
}

// NewsList()
// defaultWeather()