// server.js
// mongodb
const db = require('./config/db');

const express = require('express');
const app = express();
const port = 3000;

const UserRouter = require('./routers/userRouter');

// Use express.json() middleware directly
app.use(express.json());

// Use the correct path for mounting the router
app.use('/user', UserRouter);

app.listen(port, () => {
  console.log(`server running on : ${port}`);
});
