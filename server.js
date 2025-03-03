const express = require('express');
   const path = require('path');
   const app = express();
   const port = 3000; // You can change the port if needed

   // Serve static files (like index.html) from the current directory
   app.use(express.static(path.join(__dirname)));
   // Serve static files (like CSS, JS, images) from the current directory
   app.use(express.static(__dirname));

   // Route to serve index.html at the root URL
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'login.html'));
   });

   // Start the server
   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   // Export the Express app as a serverless function
   module.exports = app;
