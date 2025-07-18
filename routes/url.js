const express = require('express');
const router = express.Router();
const { generateId } = require('../utils/idGenerator');
const store = require('../data/store');

// POST /shorten - Shorten a URL
router.post('/shorten', (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: 'Long URL is required' });

  const shortId = generateId();
  store[shortId] = longUrl;

  res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
});

// GET /:id - Redirect to the original URL
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const longUrl = store[id];

  if (!longUrl) return res.status(404).send('URL not found');

  res.redirect(longUrl);
});

module.exports = router;
