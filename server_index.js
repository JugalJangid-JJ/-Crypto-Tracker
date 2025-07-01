const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, '../client/public')));

// Proxy for 24h price history (CoinCap REST API)
app.get('/api/history/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=h1`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch history' });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));