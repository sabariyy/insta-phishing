const express = require('express');
   const path = require('path');
   const app = express();

   // Serve static files (like CSS, JS, images) from the current directory
   app.use(express.static(__dirname));

   // Route to serve index.html at the root URL
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'index.html'));
   });

   // Export the Express app as a serverless function
   module.exports = app;
