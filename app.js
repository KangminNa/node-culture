// app.js

const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use('/', uploadRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
