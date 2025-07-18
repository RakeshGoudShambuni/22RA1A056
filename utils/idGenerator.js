const { nanoid } = require('nanoid');

function generateId() {
  return nanoid(6);
}

module.exports = { generateId };
