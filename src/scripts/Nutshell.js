import { EventForm } from "./events/EventForm.js"
import { EventList } from "./events/EventList.js"
import { getEvents } from "./events/EventProvider.js"
import { FriendList } from "./friends/FriendList.js"
import { getFriends } from "./friends/FriendProvider.js"
import { getUsers } from "./users/UserProvider.js"
import { renderNewsButton } from "./news/NewsButton.js"
import { newsClickEventHeard } from "./news/NewsForm.js"
import { getNews } from "./news/NewsDataProvider.js"
import { NewsList } from "./news/NewsList.js"

const mainBody = document.querySelector(".mainBody")

export const Nutshell = () => {
    mainBody.innerHTML = `
  <aside class="asideLeft">
  <div class="asideLeft__user">
      <h2>---USER---</h2>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered.</div>
  <div class="asideLeft__weather">
      <h2>---Weather---</h2>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered.</div>
  <div class="asideLeft__taskList">
      <h2>---Task List---</h2>
      ul>li>task>checkbox for done
(Updates db and prevent form
Being displayed)>btn Remove</div>
  <div class="asideLeft__eventList">
      <h2>---Event List---</h2>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered.</div>
</aside>
<article class="centerBody">
  <div class="centerBody__create">
      <div id="createForm">
          <h2>---CREATE---</h2>
          What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      </div>
  <div class="centerBody__create-Buttons">
      <div id="taskButton">
          <button id="taskButton">Create Task</button>

      </div>
      <div id="eventButton">
          <button id="eventButton"> Create Event</button>

      </div>
      <div id="newsButton">
          <button id="newsButton">Create News</button>

      </div>
  </div>
  <div class="centerBody__create-submit">
      <button>Submit</button>
  </div>
  </div>
  <div class="centerBody__mainFeed">

      <div class="centerBody__eventFeed">
          <h2>---Event Feed---</h2>
          <div class="eventWeather">--EVENT WEATHER--</div>
          <div class="eventFeed">
              <div class="eventCard">

                  What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
              </div>
              <div class="eventCard">

                  What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
              </div>
              <div class="eventCard">

                  What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
              </div>
          </div>
  </div>
  <div class="centerBody__newsFeed">
      <h2>---News Feed---</h2>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!<br>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. Hello Dî hoped cream? Flash-flame employment tracks rob perceived son's undoubtedly Mordor ate fiery. Pursued nine confess Tom? Ungol tells nearly sneak scheme. Bungo undone greater tad ride private sickness treat spears!
      
      
  </div>
</div>
</article>
<aside class="asideRight">
  <div class="asideRight__friendsList">
      <h2>---FRIENDS LIST---</h2>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered.</div>
  <div class="asideRight__chat">
      <h2>---CHAT---</h2>
      What about second breakfast? Sticky am fear dogs wondering slow surprisingly 24th outrunning incident ears EIf-witch. Overreacting several hell Sit slaughtered. </div>
  
</aside>`
    getEvents()
        .then(getUsers)
        .then(getFriends)
        .then(FriendList)
        .then(EventList)
        .then(getNews)
        .then(() => {
            renderNewsButton()
            newsClickEventHeard()
            NewsList();
        })
}
