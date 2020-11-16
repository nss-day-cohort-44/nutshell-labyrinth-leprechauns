import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"
import { Nutshell } from "../Nutshell.js"

export const InitialRender = () => {
  const mainBody = document.querySelector(".mainBody")
  const auth = document.querySelector(".auth")
  if (!window.sessionStorage.activeUser) {
    mainBody.classList.add(".hide")
    auth.classList.remove(".hide")
    LoginForm()
    RegisterForm()
  }

  if (window.sessionStorage.activeUser) {
    mainBody.classList.remove(".hide")
    auth.classList.add(".hide")
    Nutshell()
  }
}
