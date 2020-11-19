export const renderMessageForm = (contentTarget) => {
  contentTarget.innerHTML = `
  <label for="messageInput">Message</label>
  <textarea id="messageInput" name="messageInput" rows="5" cols="30"></textarea> 
  <button id="messageInputBtn">Post</button>
  `
}