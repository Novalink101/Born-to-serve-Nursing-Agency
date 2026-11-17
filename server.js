const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static HTML files from the root directory
app.use(express.static(__dirname));

// Send index.html for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Send Book.html for the booking page
app.get('/Book.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Book.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
