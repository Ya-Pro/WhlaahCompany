const chatBody = document.querySelector(".chat-body");
const chatInput = document.querySelector(".chat-user input");
const sendMessage = document.querySelector(".chat-icon i");
sendMessage.addEventListener("click", () => renderUserMessage());

chatInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});
function renderUserMessage() {
  const userRequest = chatInput.value;
  renderMessageEle(userRequest, "user");
  chatInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userRequest);
  }, 1000);
}
const renderChatbotResponse = (userRequest) => {
  const res = getChatbotReplay(userRequest);
  renderMessageEle(res);
};
function renderMessageEle(question, answer) {
  let questionClass = "visitor-message";
  if (answer !== "user") {
    questionClass = "chatbot-answer";
  }
  const messageEle = document.createElement("div");
  const textNode = document.createTextNode(question);
  messageEle.classList.add(questionClass);
  messageEle.append(textNode);
  chatBody.append(messageEle);
}
//getting the userreplyig
const getChatbotReplay = (userRequest) => {
  return answersOnUser[userRequest] === undefined
    ? "من فضلك جرب شيء أخر"
    : answersOnUser[userRequest];
};
