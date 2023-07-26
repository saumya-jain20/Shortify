const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv"); // loads environment variables from a .env file into process.env
dotenv.config({ path: "./config.env" });
const connectDB = require('./config/db');
const app = express();
// Connect to database
connectDB();
app.use(cors({ credentials: true, origin: true }));
// app.use(cors({ origin: '*' }))
app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT||5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
