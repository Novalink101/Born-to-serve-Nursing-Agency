const express = require('express');
const path = require('path');
const app = express();

// Render assigns a port dynamically via environment variables
const PORT = process.env.PORT || 3000;

// Serve all static files (index.html, Book.html, images, etc.) from the root directory
app.use(express.static(__dirname));

// Fallback: If a user tries to visit a page that doesn't exist, send them to the homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Website is live!`);
});
