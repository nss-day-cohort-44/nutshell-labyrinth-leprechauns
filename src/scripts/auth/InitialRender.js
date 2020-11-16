import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"
import { Nutshell } from "../Nutshell.js"

// On page load this function determines if an activeUser is set and if so it renders the main App and if not it renders the login and reg form
export const InitialRender = () => {
  const mainBody = document.querySelector(".mainBody")
  const auth = document.querySelector(".auth")

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
}
