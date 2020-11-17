import { EventList } from "./events/EventList.js"
import { getEvents } from "./events/EventProvider.js"
import { FriendList } from "./friends/FriendList.js"
import { getFriends } from "./friends/FriendProvider.js"
import { getUsers } from "./users/UserProvider.js"
import { renderNewsButton } from "./news/NewsButton.js"
import { newsClickEventHeard } from "./news/NewsForm.js"
import { getNews } from "./news/NewsDataProvider.js"
import { NewsList } from "./news/NewsList.js"
import { displayTaskButton } from "./tasks/TaskButton.js"
import { TaskFormRender, TaskList } from "./tasks/TaskList.js"
import { defaultWeather } from "./weather/WeatherSelect.js"
import "./events/EventForm.js"

const mainBody = document.querySelector(".mainBody")

export const Nutshell = () => {
    mainBody.innerHTML = `
  <aside class="asideLeft">
  <div class="asideLeft__user">
      <h2>---USER---</h2>
  <div class="asideLeft__weather">
  <div class="h4Nashville">
                        </div>
                        <div class="weatherBox">
                            </div>
      <h2>---Weather---</h2>
  <div class="asideLeft__taskList">
      <h2>---Task List---</h2>
     </div>
  <div class="asideLeft__eventList">
      <h2>---Event List---</h2>
</aside>
<article class="centerBody">
  <div class="centerBody__create">
      <div id="createForm">
          <h2>---CREATE---</h2>
      </div>
  <div class="centerBody__create-Buttons">
      <div id="taskButton">
          

      </div>
      <div id="eventButton">
          <button id="eventButton"> Create Event</button>

      </div>
      <div id="newsButton">
          <button id="newsButton">Create News</button>

      </div>
  </div>
  
  </div>
  <div class="centerBody__mainFeed">

      <div class="centerBody__eventFeed">
          <h2>---Event Feed---</h2>
          <div class="eventWeather">--EVENT WEATHER--</div>
          <div class="eventFeed">
              <div class="eventCard">

              </div>
              <div class="eventCard">

              </div>
              <div class="eventCard">

              </div>
          </div>
  </div>
  <div class="centerBody__newsFeed">
      <h2>---News Feed---</h2>
      
      
  </div>
</div>
</article>
<aside class="asideRight">
  <div class="asideRight__friendsList">
      <h2>---FRIENDS LIST---</h2>
      </div>    
  <div class="asideRight__chat">
      
    </div>  
</aside>`
displayTaskButton()
TaskFormRender()
TaskList()
renderNewsButton()
newsClickEventHeard()
NewsList()
defaultWeather()
getFriends().then(getUsers).then(FriendList)
getEvents().then(EventList)
}
