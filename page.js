document.getElementById("send-button").addEventListener("click", function() {
    let inputMessage = document.getElementById("input-message").value;
  
    if(inputMessage.trim() === "") return;
  
    // Clear input field
    document.getElementById("input-message").value = "";
  
    // Display the input message on the right
    let userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("message", "user-message");
    userMessageDiv.innerHTML = inputMessage;
    document.getElementById("chat-area").appendChild(userMessageDiv);
  
    // Scroll to the bottom of the chat area
    document.getElementById("chat-area").scrollTop = document.getElementById("chat-area").scrollHeight;
  
    // Simulate AI response generation (Add your AI backend logic here)
    setTimeout(function() {
      let aiMessageDiv = document.createElement("div");
      aiMessageDiv.classList.add("message", "ai-message");
      aiMessageDiv.innerHTML = "AI generated response here...";
      document.getElementById("chat-area").appendChild(aiMessageDiv);
  
      // Scroll to the bottom of the chat area
      document.getElementById("chat-area").scrollTop = document.getElementById("chat-area").scrollHeight;
      
      // Append to search history
      let historyList = document.getElementById("search-history");
      let newHistoryItem = document.createElement("li");
      newHistoryItem.textContent = inputMessage;
      historyList.appendChild(newHistoryItem);
    }, 1000);
  });
  
  document.getElementById("edit-button").addEventListener("click", function() {
    let lastMessage = document.querySelector(".user-message:last-child");
    if(lastMessage) {
      document.getElementById("input-message").value = lastMessage.innerHTML;
      lastMessage.remove();
    }
  });
  