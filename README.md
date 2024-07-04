# AIDistantSmartQuery Plugin

AIDistantSmartQuery is a plug-and-play JavaScript plugin that provides a chat interface for interacting with the AidSistant Smart Query API. This plugin adds a chat button to your webpage, allowing users to interact with your chatbot seamlessly.

## Features

- Adds a chat button to the bottom right corner of the page.
- Opens a chat interface for user interaction.
- Sends user messages to the AidSistant Smart Query API.
- Displays responses from the chatbot in the chat interface.
- Customizable UI color.

## Installation

1. **Download the `aidsistant-smartquery.js` file:**

   Download the `aidsistant-smartquery.js` file and include it in your project.

2. **Include the script in your HTML:**

   Add the following script tag to your HTML file to include the `aidsistant-smartquery.js` file:

   ```html
   <script src="path/to/aidsistant-smartquery.js"></script>
   ```

## Usage

1. **Initialize the plugin:**

   Initialize the AIDistantSmartQuery plugin with your API key, chatbot name, and optional UI color.

   ```html
   <script>
     document.addEventListener('DOMContentLoaded', function() {
       new AIDistantSmartQuery({
         apiKey: 'YOUR_API_KEY',
         chatbotName: 'Your Chatbot Name',
         uiColor: '#1e90ff' // Optional: Customize the UI color
       });
     });
   </script>
   ```

2. **HTML Example:**

   Here's a basic example of how to include and initialize the plugin in your HTML:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>AIDistantSmartQuery Example</title>
   </head>
   <body>
     <!-- Your website content -->

     <!-- Include the aidsistant-smartquery.js script -->
     <script src="path/to/aidsistant-smartquery.js"></script>
     <script>
       document.addEventListener('DOMContentLoaded', function() {
         new AIDistantSmartQuery({
           apiKey: 'YOUR_API_KEY',
           chatbotName: 'Your Chatbot Name',
           uiColor: '#1e90ff' // Optional: Customize the UI color
         });
       });
     </script>
   </body>
   </html>
   ```

## API

The plugin interacts with the AidSistant Smart Query API at `https://api-aidsistant.rubythalib.ai/api/chat-client/`.

### Example API Request

```bash
curl -X 'POST' \
  'https://api-aidsistant.rubythalib.ai/api/chat-client/' \
  -H 'accept: application/json' \
  -H 'apiKey: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
  "text": "Hello, how can I help you?"
}'
```

## Customization

- **UI Color:**
  Customize the chat button and chat interface color by passing the `uiColor` parameter when initializing the plugin.

- **Chatbot Name:**
  Set the chatbot name that will appear in the chat interface header by passing the `chatbotName` parameter when initializing the plugin.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.


## Contact

If you have any questions or need further assistance, please contact the AidSistant team.

