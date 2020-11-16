import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { EventForm } from "./events/EventForm.js"
import { FriendList } from "./friends/FriendList.js";
import { getFriends } from "./friends/FriendProvider.js";
import { getUsers } from "./users/UserProvider.js"
import { Nutshell } from "./Nutshell.js"
// LoginForm()
// RegisterForm()

EventForm();
LoginForm();
getFriends()
.then(getUsers)
.then(FriendList)
/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
