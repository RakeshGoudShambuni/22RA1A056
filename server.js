const express = require('express');
const urlRoutes = require('./routes/url');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', urlRoutes);

app.listen(PORT, () => {
  console.log(`URL Shortener service running on http://localhost:${PORT}`);
});
