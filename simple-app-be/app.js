const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('./configEnv');
const authRoutes = require('./src/routes/authRoutes');
const { MongoClient } = require("mongodb");
const { authenticateJWT } = require('./src/middlewares/authenticateJWT');
const { getAllUsers } = require('./src/routes/allUsersRoute');
const port = 5000;

mongoose
.connect(dotenv.MONGODB_URI, { useNewUrlParser: true })
.then((_) => console.log("Connected to DB"))
.catch((err) => console.error("error", err));


app.use(cors({ origin: ['http://localhost:3000'] }));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/auth', authRoutes);

app.get('/allUsers', authenticateJWT, getAllUsers);

app.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});