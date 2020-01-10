let stubornMessageInterval = 0;

function sendMessage(document, message) {
  const inputElem = document.querySelector('footer div[contenteditable="true"]')
  inputElem.textContent = message
  inputElem.dispatchEvent(new Event('input', { 'bubbles': true }))
  const sendButton = document.querySelector('footer > div > div > button')
  sendButton.click()
}

function hasReceivedResponse(document, expectedResponse) {
  const messageList = document.querySelectorAll('#main .message-in')
  const lastMessage = messageList[messageList.length - 1]
  
  return lastMessage.innerText.toLocaleLowerCase().indexOf(expectedResponse.toLocaleLowerCase()) != -1
}

stubornMessageInterval = setInterval(
  function handleMessaging() {
    sendMessage(window.document, 'Me responde!')
    
    if (hasReceivedResponse(window.document, 'oi')) {
      clearInterval(stubornMessageInterval)
    }
  },
  1000
)
