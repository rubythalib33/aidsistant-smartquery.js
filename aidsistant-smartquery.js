(function() {
  class AIDistantSmartQuery {
    constructor({ apiKey, chatbotName, uiColor }) {
      this.apiKey = apiKey;
      this.chatbotName = chatbotName;
      this.uiColor = uiColor || '#1e90ff';
      this.chatHistory = [];

      this.initChatButton();
    }

    initChatButton() {
      const chatButton = document.createElement('div');
      chatButton.id = 'aidsistant-chat-button';
      chatButton.style.position = 'fixed';
      chatButton.style.bottom = '20px';
      chatButton.style.right = '20px'; // Changed to right bottom corner
      chatButton.style.backgroundColor = this.uiColor;
      chatButton.style.color = '#fff';
      chatButton.style.borderRadius = '50%';
      chatButton.style.width = '50px';
      chatButton.style.height = '50px';
      chatButton.style.display = 'flex';
      chatButton.style.justifyContent = 'center';
      chatButton.style.alignItems = 'center';
      chatButton.style.cursor = 'pointer';
      chatButton.innerHTML = '&#128172;'; // Message logo

      chatButton.addEventListener('click', () => this.toggleChatUI());

      document.body.appendChild(chatButton);
    }

    toggleChatUI() {
      let chatUI = document.getElementById('aidsistant-chat-ui');
      if (chatUI) {
        chatUI.style.display = chatUI.style.display === 'none' ? 'block' : 'none';
      } else {
        this.createChatUI();
      }
    }

    createChatUI() {
      const chatUI = document.createElement('div');
      chatUI.id = 'aidsistant-chat-ui';
      chatUI.style.position = 'fixed';
      chatUI.style.bottom = '80px';
      chatUI.style.right = '20px'; // Changed to right bottom corner
      chatUI.style.width = '300px';
      chatUI.style.height = '400px';
      chatUI.style.backgroundColor = '#fff';
      chatUI.style.border = `1px solid ${this.uiColor}`;
      chatUI.style.borderRadius = '10px';
      chatUI.style.display = 'flex';
      chatUI.style.flexDirection = 'column';
      chatUI.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      chatUI.style.zIndex = '1000';

      const header = document.createElement('div');
      header.style.backgroundColor = this.uiColor;
      header.style.color = '#fff';
      header.style.padding = '10px';
      header.style.borderTopLeftRadius = '10px';
      header.style.borderTopRightRadius = '10px';
      header.innerHTML = this.chatbotName;

      const chatContent = document.createElement('div');
      chatContent.id = 'aidsistant-chat-content';
      chatContent.style.flexGrow = '1';
      chatContent.style.padding = '10px';
      chatContent.style.overflowY = 'auto';

      const chatInputContainer = document.createElement('div');
      chatInputContainer.style.display = 'flex';
      chatInputContainer.style.borderTop = `1px solid ${this.uiColor}`;

      const chatInput = document.createElement('input');
      chatInput.type = 'text';
      chatInput.placeholder = 'Type your message...';
      chatInput.style.flexGrow = '1';
      chatInput.style.border = 'none';
      chatInput.style.padding = '10px';
      chatInput.style.outline = 'none';

      chatInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          this.sendMessage(chatInput.value);
          chatInput.value = ''; // Clear the input field
        }
      });

      const sendButton = document.createElement('button');
      sendButton.innerHTML = 'Send';
      sendButton.style.backgroundColor = this.uiColor;
      sendButton.style.color = '#fff';
      sendButton.style.border = 'none';
      sendButton.style.padding = '10px';
      sendButton.style.cursor = 'pointer';

      sendButton.addEventListener('click', () => {
        this.sendMessage(chatInput.value);
        chatInput.value = ''; // Clear the input field
      });

      chatInputContainer.appendChild(chatInput);
      chatInputContainer.appendChild(sendButton);

      chatUI.appendChild(header);
      chatUI.appendChild(chatContent);
      chatUI.appendChild(chatInputContainer);

      document.body.appendChild(chatUI);
    }

    async sendMessage(message) {
      if (!message.trim()) return;

      const chatContent = document.getElementById('aidsistant-chat-content');
      this.addMessageToUI('user', message);

      try {
        const response = await fetch('https://api-aidsistant.rubythalib.ai/api/chat-client/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apiKey': this.apiKey
          },
          body: JSON.stringify({ text: message })
        });
        const data = await response.json();
        this.addMessageToUI('bot', data || 'No response');
      } catch (error) {
        console.error('Error sending message:', error);
        this.addMessageToUI('bot', 'Error sending message');
      }
    }

    addMessageToUI(sender, message) {
      const chatContent = document.getElementById('aidsistant-chat-content');

      const messageElement = document.createElement('div');
      messageElement.style.marginBottom = '10px';
      messageElement.style.padding = '10px';
      messageElement.style.borderRadius = '5px';
      messageElement.style.wordWrap = 'break-word';

      if (sender === 'user') {
        messageElement.style.backgroundColor = '#1e90ff';
        messageElement.style.color = '#fff';
        messageElement.style.alignSelf = 'flex-end';
      } else {
        messageElement.style.backgroundColor = '#f1f1f1';
        messageElement.style.color = '#000';
        messageElement.style.alignSelf = 'flex-start';
      }

      messageElement.innerHTML = message;
      chatContent.appendChild(messageElement);
      chatContent.scrollTop = chatContent.scrollHeight;
    }
  }

  // Expose the class to the global scope
  window.AIDistantSmartQuery = AIDistantSmartQuery;
})();
