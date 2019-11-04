const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res, next) => {
  res.send('oixum');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
