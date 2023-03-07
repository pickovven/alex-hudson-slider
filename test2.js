function handleMessageSend(messageId, senderEmail, messageContent)  {
    database.save(messageId, senderEmail, messageContent);
  }
  
  function generateMessageHTML(messageId) {
    let messageContent = database.loadContent(messageId);
    return `<p class="messageContent">${messageContent}</p>`;
  }