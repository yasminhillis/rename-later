const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('home route'));

app.listen(PORT, () => console.log(`app running on port ${PORT}`));