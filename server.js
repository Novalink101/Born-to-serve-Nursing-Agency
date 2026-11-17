const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your HTML files
app.use(express.static(__dirname));

// Create an endpoint to receive form data
app.post('/api/apply', (req, res) => {
    console.log("NEW APPLICATION RECEIVED:");
    console.log(req.body);
    
    // IN THE FUTURE: Here is where you connect to a database (like MongoDB or Supabase) to save the data.

    res.json({ success: true, message: "Application received!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
