require('dotenv').config();
const express = require("express");
const cors = require('cors');
require("./db/db.js");
const router = express.Router();
const Student = require("./Model/UserMessage");
const messageRouter = require("./routes/Message");

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(messageRouter);

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});